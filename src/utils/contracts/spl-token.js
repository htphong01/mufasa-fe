import * as splToken from '@solana/spl-token';
import { connection } from './sol';
import { PublicKey } from '@solana/web3.js';

const MUFASA_TOKEN_ADDRESS = new PublicKey(import.meta.env.VITE_SPL_TOKEN_ADDRESS);

export const getAssociatedTokenAccount = (publicKey) => {
  return splToken.getOrCreateAssociatedTokenAccount(connection, publicKey, MUFASA_TOKEN_ADDRESS, publicKey);
};
