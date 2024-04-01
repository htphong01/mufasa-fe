import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const commitmentLevel = "finalized";
const solNetwork = import.meta.env.VITE_SOLANA_NETWORK;
export const endpoint = clusterApiUrl(solNetwork);
export const connection = new Connection(endpoint, commitmentLevel);
