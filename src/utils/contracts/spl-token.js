import { PublicKey } from '@solana/web3.js';
import { connection } from './sol';

const MUFASA_TOKEN_ADDRESS = import.meta.env.VITE_MUFASA_TOKEN_ADDRESS;

export const getTokenBalance = async (address) => {
  const data = await connection.getTokenAccountBalance(new PublicKey(address));
  return data?.value?.uiAmount || 0;
};
