import { ethers } from 'ethers';
import ERC20ABI from '@/resources/abis/ERC20Contract.json';

export const writeContract = (address, signer, functionName, args = [], value = 0) => {
  const contract = new ethers.Contract(address, ERC20ABI, signer);
  return contract[functionName](...args, {
    value,
  });
};

export const readContract = (address, provider, functionName, args = []) => {
  const contract = new ethers.Contract(address, AirdropABI, provider);
  return contract[functionName](...args, {
    value,
  });
};
