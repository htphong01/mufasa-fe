import AirdropAddressJSON from '@/resources/airdrop-address.json';
import airdropIdl from '@/resources/idl/airdrop.json';
import MerkleTreeJSON from '@/resources/merkle-tree.json';
import { utils } from '@coral-xyz/anchor';
import * as anchor from '@project-serum/anchor';
import { Program, Provider, web3 } from '@project-serum/anchor';
// import * as splToken from '@solana/spl-token';
import { PublicKey, Transaction } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { getProof } from './lib';
import { commitmentLevel, connection } from './sol';

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
  // const { program } = getProgram();
  // const [airdropPDA] = PublicKey.findProgramAddressSync(
  //   [utils.bytes.utf8.encode('Airdrop'), new PublicKey(MUFASA_TOKEN_ADDRESS).toBuffer()],
  //   program.programId
  // );
  // const airdropData = await program.account.airdrop.fetch(airdropPDA);
  // const [claimStatusPDA] = PublicKey.findProgramAddressSync(
  //   [utils.bytes.utf8.encode('ClaimStatus'), payer.publicKey.toBuffer(), airdropPDA.toBuffer()],
  //   program.programId
  // );
  // const claimantInfo = AirdropAddressJSON[payer.publicKey.toString()];
  // if (!claimantInfo) {
  //   throw Error('Not in whitelist to claim!')
  // }
  // const proof = getProof(claimantInfo.index, MerkleTreeJSON).map((p) => Buffer.from(p, 'hex').toJSON().data);
  // let claimantTokenAccount;
  // try {
  //   claimantTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
  //     connection,
  //     payer,
  //     airdropData.mint,
  //     payer.publicKey
  //   );
  // } catch (error) {
  //   const associatedToken = await splToken.getAssociatedTokenAddress(airdropData.mint, payer.publicKey);
  //   const tx = new Transaction().add(
  //     splToken.createAssociatedTokenAccountInstruction(
  //       payer.publicKey,
  //       associatedToken,
  //       payer.publicKey,
  //       airdropData.mint
  //     )
  //   );
  //   tx.feePayer = payer.publicKey;
  //   const latestBlockhash = await connection.getLatestBlockhash();
  //   tx.recentBlockhash = latestBlockhash.blockhash;
  //   const signedRawTx = await payer.signTransaction(tx);
  //   const signedTx = signedRawTx.serialize();
  //   const signature = await connection.sendRawTransaction(signedTx);
  //   await connection.confirmTransaction({
  //     signature: signature,
  //   });
  //   claimantTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
  //     connection,
  //     payer,
  //     airdropData.mint,
  //     payer.publicKey
  //   );
  // }
  // return {
  //   airdropPDA,
  //   airdropData,
  //   claimStatusPDA,
  //   proof,
  //   claimantTokenAccount: claimantTokenAccount.address,
  //   amount: claimantInfo.amount,
  // };
};

export const getTokenVaultAddress = async (token = MUFASA_TOKEN_ADDRESS) => {
  const { program } = getProgram();
  const [airdropPDA] = PublicKey.findProgramAddressSync(
    [utils.bytes.utf8.encode('Airdrop'), new PublicKey(token).toBuffer()],
    program.programId
  );

  const airdropData = await program.account.airdrop.fetch(airdropPDA);
  return airdropData.tokenVault.toString();
};

export const airdrop = async (wallet) => {
  // const airdropInfo = await getAirdropInfo(wallet);
  // if (!airdropInfo) {
  //   return null;
  // }
  // const { airdropPDA, airdropData, claimStatusPDA, proof, claimantTokenAccount, amount } = airdropInfo;
  // const { program } = getProgram(wallet);
  // const tx = await program.methods
  //   .claim(new anchor.BN(amount), new anchor.BN(amount), proof)
  //   .accounts({
  //     claimant: wallet.publicKey,
  //     airdrop: airdropPDA,
  //     claimStatus: claimStatusPDA,
  //     to: claimantTokenAccount,
  //     from: airdropData.tokenVault,
  //     tokenProgram: splToken.TOKEN_PROGRAM_ID,
  //     systemProgram: web3.SystemProgram.programId,
  //   })
  //   .transaction();
  // tx.feePayer = wallet.publicKey;
  // const latestBlockhash = await connection.getLatestBlockhash();
  // tx.recentBlockhash = latestBlockhash.blockhash;
  // const signedRawTx = await wallet.signTransaction(tx);
  // const signedTx = signedRawTx.serialize();
  // const signature = await connection.sendRawTransaction(signedTx);
  // await connection.confirmTransaction({
  //   signature: signature,
  // });
  // return signature;
};
