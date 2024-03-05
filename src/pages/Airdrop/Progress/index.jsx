import React, { useState } from 'react';
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { BrowserProvider } from 'ethers'
import { ClaimButton, Container, ProgressBar, ProgressContainer, ProgressLabel } from './Progress.styled';
import { writeContract } from '@/utils/contracts/airdrop';

export default function Progress() {
  const [progress, setProgress] = useState(24);
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const handleClaim = async () => {
    const provider = new BrowserProvider(walletProvider)
    const signer = await provider.getSigner()
    const tx = await writeContract(signer, 'claim');
    console.log('claim', tx);
  };

  return (
    <Container>
      <ProgressContainer>
        <ProgressLabel>
          <div>
            <label>Current airdrop allocation</label>
            <span>0 $MUF</span>
          </div>
          <div>
            <label>Total Airdrop: 5,000,000</label>
            <span>$MUF</span>
          </div>
        </ProgressLabel>
        <ProgressBar width={progress}>
          <div></div>
        </ProgressBar>
        <ClaimButton onClick={isConnected ? handleClaim : open}>
          <span>buyyyyyyy grrrrr</span>
        </ClaimButton>
      </ProgressContainer>
    </Container>
  );
}
