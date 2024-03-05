import { writeContract } from '@/utils/contracts/airdrop';
import { parseMetamaskError } from '@/utils/convert';
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { BrowserProvider } from 'ethers';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { ClaimButton, Container, ProgressBar, ProgressContainer, ProgressLabel } from './Progress.styled';

export default function Progress() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const handleClaim = async () => {
    try {
      setIsLoading(true);
      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
      const tx = await writeContract(signer, 'claim');
      console.log('claim', tx);
      toast.success('Claim successfully');
    } catch (error) {
      const txError = parseMetamaskError(error);
      setIsLoading(false);
      toast.error(txError.context);
    }
  };

  return (
    <Container>
      {isLoading && (
        <div className="screen-loading-overlay">
          <ReactLoading type="spinningBubbles" color="#ffffff" height={60} width={60} />
        </div>
      )}

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
