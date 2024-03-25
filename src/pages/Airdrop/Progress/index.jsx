import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { airdrop, setAdmin } from '@/utils/contracts/airdrop';
import { getAssociatedTokenAccount } from '@/utils/contracts/spl-token';
import { ClaimButton, Container, ProgressBar, ProgressContainer, ProgressLabel } from './Progress.styled';

export default function Progress() {
  
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { setVisible } = useWalletModal();

  const { publicKey, disconnect, wallet } = useWallet();

  const handleConnect = () => {
    setVisible(true);
  }

  const handleClaim = async () => {
    try {
      setIsLoading(true);
      // setAdmin()
      const address = await getAssociatedTokenAccount(publicKey);
      console.log('wallet', address.address.toString())
      toast.success('Claim successfully');
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setIsLoading(false);
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
        <ClaimButton onClick={publicKey ? handleClaim : handleConnect}>
        {/* <ClaimButton onClick={disconnect}> */}
          <span>{publicKey ? 'buyyyyyyy grrrrr' : 'Connect to buy'}</span>
        </ClaimButton>
      </ProgressContainer>
    </Container>
  );
}
