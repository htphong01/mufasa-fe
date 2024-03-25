import { Program, Provider, web3 } from '@project-serum/anchor';
import airdropIdl from '@/resources/idl/airdrop.json';
import { commitmentLevel, connection } from './sol';
import { PublicKey } from '@solana/web3.js';

export const airdropProgramId = new PublicKey(airdropIdl.metadata.address);
export const airdropInterface = JSON.parse(JSON.stringify(airdropIdl));

let program;

export const getProgram = (wallet) => {
  if (program) return program;
  const provider = new Provider(connection, wallet, {
    preflightCommitment: commitmentLevel,
  });

  if (!provider) return;

  program = new Program(airdropInterface, airdropProgramId, provider);
  return program;
};

export const airdrop = async (wallet) => {
  try {
    const program = getProgram(wallet);
    const tx = await program.methods.claim().accounts({}).rpc();
    return message;
  } catch (err) {
    console.log('Transaction error: ', err);
    return;
  }
};

export const setAdmin = async (wallet) => {
  const program = getProgram(wallet);
  const tx = await program.methods.initialize([wallet.publicKey]).accounts({
    admin: wallet.publicKey 
  }).rpc();

  console.log(tx);
};
