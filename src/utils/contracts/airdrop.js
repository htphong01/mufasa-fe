import airdropIdl from '@/resources/idl/airdrop.json';
import MerkleTreeJSON from '@/resources/merkle-tree.json';
import AirdropAddressJSON from '@/resources/airdrop-address.json';
import { utils } from '@coral-xyz/anchor';
import { Program, Provider, web3 } from '@project-serum/anchor';
import * as splToken from '@solana/spl-token';
import { PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { getProof } from './lib';
import { commitmentLevel, connection } from './sol';
import { Buffer } from 'buffer';

window.Buffer = Buffer;

export const airdropProgramId = new PublicKey(airdropIdl.metadata.address);
export const airdropInterface = JSON.parse(JSON.stringify(airdropIdl));

const MUFASA_TOKEN_ADDRESS = import.meta.env.VITE_MUFASA_TOKEN_ADDRESS;

const getProgram = (wallet) => {
  const provider = new Provider(connection, wallet, {
    preflightCommitment: commitmentLevel,
  });

  if (!provider) return;

  const program = new Program(airdropInterface, airdropProgramId, provider);
  return { provider, program };
};

const getAirdropInfo = async (payer) => {
  const { program, provider } = getProgram();
  const [airdropPDA] = PublicKey.findProgramAddressSync(
    [utils.bytes.utf8.encode('Airdrop'), new PublicKey(MUFASA_TOKEN_ADDRESS).toBuffer()],
    program.programId
  );

  const airdropData = await program.account.airdrop.fetch(airdropPDA);

  const [claimStatusPDA] = PublicKey.findProgramAddressSync(
    [utils.bytes.utf8.encode('ClaimStatus'), payer.publicKey.toBuffer(), airdropPDA.toBuffer()],
    program.programId
  );

  const claimantInfo = AirdropAddressJSON[payer.publicKey.toString()];
  if (!claimantInfo) {
    return null;
  }

  const proof = getProof(claimantInfo.index, MerkleTreeJSON);

  let claimantTokenAccount = splToken.getAssociatedTokenAddressSync(airdropData.mint, payer.publicKey);

  if (!claimantTokenAccount) {
    const transaction = new Transaction().add(
      splToken.createAssociatedTokenAccountInstruction(
        payer.publicKey,
        claimantTokenAccount,
        payer.publicKey,
        airdropData.mint
      )
    );

    await sendAndConfirmTransaction(connection, transaction, [payer], confirmOptions);
  }

  return { airdropPDA, airdropData, claimStatusPDA, proof, claimantTokenAccount, amount: claimantInfo.amount };
};

export const airdrop = async (wallet) => {
  try {
    const airdropInfo = await getAirdropInfo(wallet);
    if (!airdropInfo) {
      return null;
    }
    const { airdropPDA, airdropData, claimStatusPDA, proof, claimantTokenAccount, amount } = airdropInfo;
    const { program } = getProgram(wallet);

    const tx = await program.methods
      .claim(
        BigInt(amount),
        BigInt(amount),
        proof.map((p) => Buffer.from(p, 'hex').toJSON().data)
      )
      .accounts({
        claimant: wallet.publicKey,
        airdrop: airdropPDA,
        claimStatus: claimStatusPDA,
        to: claimantTokenAccount,
        from: airdropData.tokenVault,
        tokenProgram: splToken.TOKEN_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([wallet])
      .rpc();
    return tx;
  } catch (err) {
    console.log('Transaction error: ', err);
    return;
  }
};
