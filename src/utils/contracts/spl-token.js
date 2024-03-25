import * as splToken from '@solana/spl-token';
import { connection } from './sol';
import { PublicKey } from '@solana/web3.js';

export const getAssociatedTokenAccount = (publicKey) => {
  return splToken.getOrCreateAssociatedTokenAccount(connection, publicKey, new PublicKey(import.meta.env.VITE_SPL_TOKEN_ADDRESS), publicKey);
};

export const createSpltoken = async (publicKey) => {
  const airdropMint = await splToken.createMint(
    connection,
    payer,
    publicKey,
    publicKey,
    6
  );
}
