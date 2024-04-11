import { airdrop, getTokenVaultAddress } from '@/utils/contracts/airdrop';
import { getTokenBalance } from '@/utils/contracts/spl-token';
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
  const [tokenSupply, setTokenSupply] = useState({
    current: Number(import.meta.env.VITE_TOTAL_SUPPLY),
    total: Number(import.meta.env.VITE_TOTAL_SUPPLY),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [signature, setSignature] = useState(user?.claimTx || '');
  const { setVisible } = useWalletModal();

  const { publicKey } = useWallet();
  // const wallet = useAnchorWallet();
  const wallet = useWallet();

  const handleConnect = () => {
    setVisible(true);
  };

  const handleViewTransaction = () => {
    window.open(`${SOLANA_EXPLORER}/tx/${signature}?cluster=${NETWORK}`);
  };

  const fetchTokenProgress = async () => {
    const tokenVaultAddress = await getTokenVaultAddress();
    const data = await getTokenBalance(tokenVaultAddress);
    setTokenSupply({
      current: Number(import.meta.env.VITE_TOTAL_SUPPLY),
      total: Number(import.meta.env.VITE_TOTAL_SUPPLY),
    });
  };

  const handleClaim = async () => {
    try {
      // setIsLoading(true);
      // const signature = await airdrop(wallet);
      // setSignature(signature);
      // await updateUser(user.address, { claimTx: signature });
      // fetchTokenProgress();
      // toast.success('Claim successfully');
      // setIsLoading(false);
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setSignature(user?.claimTx || '');
    fetchTokenProgress();
  }, [user]);

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
            <span>{tokenSupply.total - tokenSupply.current} $MUFASA</span>
          </div>
          <div>
            <label>Total Airdrop</label>
            <span>9,500,000,000,000 $MUFASA</span>
          </div>
        </ProgressLabel>
        <ProgressBar width={((tokenSupply.total - tokenSupply.current) * 100) / tokenSupply.total}>
          <div></div>
        </ProgressBar>
        {/* {signature && wallet?.publicKey ? (
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
            <span>{publicKey ? 'Buy Mufasa' : 'Connect to claim'}</span>
          </ClaimButton>
        )} */}
        <ClaimButton disabled={true}>
          <span>Coming soon</span>
        </ClaimButton>
      </ProgressContainer>
    </Container>
  );
}
