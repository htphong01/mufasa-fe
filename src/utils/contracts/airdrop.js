import { Program, Provider, web3 } from '@project-serum/anchor';
import airdropIdl from '@/resources/idl/airdrop.json';
import { commitmentLevel, connection } from './sol';
import { PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAccount } from './spl-token';

export const airdropProgramId = new PublicKey(airdropIdl.metadata.address);
export const airdropInterface = JSON.parse(JSON.stringify(airdropIdl));

const AIRDROP_PDA_ADDRESS = new PublicKey(import.meta.env.VITE_AIRDROP_PDA_ADDRESS);
const AIRDROP_TOKEN_VAULT_ADDRESS = new PublicKey(import.meta.env.VITE_AIRDROP_TOKEN_VAULT_ADDRESS);
const MUFASA_TOKEN_ADDRESS = import.meta.env.VITE_SPL_TOKEN_ADDRESS;
const AIRDROP_ADDRESS = import.meta.env.VITE_AIRDROP_ADDRESS;

let program;

const getProgram = (wallet) => {
  if (program) return program;
  const provider = new Provider(connection, wallet, {
    preflightCommitment: commitmentLevel,
  });

  if (!provider) return;

  program = new Program(airdropInterface, airdropProgramId, provider);
  return program;
};

const getClaimStatusPDA = () => {
  // const claimStatusPDA = findProgramAddressSync(
  //   [
  //     anchor.utils.bytes.utf8.encode("ClaimStatus"),
  //     payer.publicKey.toBuffer(),
  //     AIRDROP_PDA_ADDRESS.toBuffer(),
  //   ],
  //   airdropProgramId
  // );
}

export const airdrop = async (wallet) => {
  try {
    const program = getProgram(wallet);
    const claimantTokenAccount = await getAssociatedTokenAccount(wallet.publicKey);
    const tx = await program.methods
      .claim()
      .accounts({
        airdrop: AIRDROP_PDA_ADDRESS,
        claimStatus: claimStatusPDA,
        to: claimantTokenAccount,
        from: AIRDROP_TOKEN_VAULT_ADDRESS,
        tokenProgram: MUFASA_TOKEN_ADDRESS,
        systemProgram: AIRDROP_ADDRESS,
      })
      .rpc();
    return tx;
  } catch (err) {
    console.log('Transaction error: ', err);
    return;
  }
};

export const setAdmin = async (wallet) => {
  const program = getProgram(wallet);
  const tx = await program.methods
    .initialize([wallet.publicKey])
    .accounts({
      admin: wallet.publicKey,
    })
    .rpc();

  console.log(tx);
};
