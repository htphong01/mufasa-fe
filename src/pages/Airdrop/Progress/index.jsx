import { airdrop } from '@/utils/contracts/airdrop';
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { AlreadyClaim, ClaimButton, Container, ProgressBar, ProgressContainer, ProgressLabel } from './Progress.styled';
import { updateUser } from '@/api/users';

const SOLANA_EXPLORER = import.meta.env.VITE_SOLANA_EXPLORER;
const NETWORK = import.meta.env.VITE_SOLANA_NETWORK;

export default function Progress({ user }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [signature, setSignature] = useState(user?.tx || '');
  const { setVisible } = useWalletModal();

  const { publicKey } = useWallet();
  // const wallet = useAnchorWallet();
  const wallet = useWallet();

  const handleConnect = () => {
    setVisible(true);
  };

  const handleClaim = async () => {
    try {
      setIsLoading(true);
      const signature = await airdrop(wallet);
      setSignature(signature);
      await updateUser(user.address, { tx: signature });
      toast.success('Claim successfully');
      setIsLoading(false);
    } catch (error) {
      toast.error('An error occurred');
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleViewTransaction = () => {
    window.open(`${SOLANA_EXPLORER}/tx/${signature}?cluster=${NETWORK}`);
  };

  useEffect(() => {
    setSignature(user?.tx || '')
  }, [user])

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
        {signature && wallet?.publicKey ? (
          <AlreadyClaim>
            <div>You have already claimed</div>
            <div>
              Address: <span>{wallet.publicKey.toString()}</span>
            </div>
            <div>
              Signature: <span>{signature}</span>
            </div>
            <ClaimButton onClick={handleViewTransaction}>
              <span>View transaction</span>
            </ClaimButton>
          </AlreadyClaim>
        ) : (
          <ClaimButton onClick={publicKey ? handleClaim : handleConnect}>
            <span>{publicKey ? 'claimmmmmmmm grrrrr' : 'Connect to claimmmmm'}</span>
          </ClaimButton>
        )}
      </ProgressContainer>
    </Container>
  );
}
