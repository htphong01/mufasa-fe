import { ethers } from 'ethers';
import AirdropABI from '@/resources/abis/AirdropContract.json';

const AIRDROP_ADDRESS = import.meta.env.VITE_AIRDROP_CONTRACT_ADDRESS;

export const writeContract = (signer, functionName, args = [], value = 0) => {
  const contract = new ethers.Contract(AIRDROP_ADDRESS, AirdropABI, signer);
  return contract[functionName](...args, {
    value,
  });
};

export const readContract = (provider, functionName, args = []) => {
  const contract = new ethers.Contract(AIRDROP_ADDRESS, AirdropABI, provider);
  return contract[functionName](...args, {
    value,
  });
};
