import { updateUser } from '@/api/users';
import AirdropTutorialImg from '@/assets/images/png/airdrop-tutorial.png';
import { Icon } from '@iconify/react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { ClaimButton } from '../Progress/Progress.styled';
import {
  Container,
  ImageContainer,
  InstructionContainer,
  RequireConnectWallet,
  TutorialContainer,
} from './Tutorial.styled';

const masterAddress = 'EwzjM1jFGhXo8q15nLkVWFsRz1eoyP3PAkFeXdNkFemA';

export default function Tutorial({ user }) {
  const { setVisible } = useWalletModal();

  const userRefLink = `${window.location.href}?ref=${user?.code}`;

  const [isVerifying, setIsVerifying] = useState(false);
  const [doneTask, setDoneTask] = useState({
    twitter: user?.twitter || false,
    telegram: user?.telegram || false,
  });
  const [isCopying, setIsCopying] = useState({
    address: false,
    invite: false,
  });

  const handleOpenLink = (type) => {
    let url = '';
    switch (type) {
      case 'twitter':
        url = 'https://x.com/mufasalol_';
        break;
      case 'telegram':
        url = 'https://t.me/mufasalol';
        break;
    }

    setIsVerifying(true);
    window.open(url, '_blank', 'noreferrer');
    setTimeout(async () => {
      setIsVerifying(false);
      setDoneTask({
        ...doneTask,
        [type]: true,
      });
      await updateUser(user.address, { [type]: true });
      toast.success('Verify successfully');
    }, 15000);
  };

  const handleCopyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);

    setIsCopying({
      ...isCopying,
      [type]: true,
    });

    setTimeout(() => {
      setIsCopying({
        ...isCopying,
        [type]: false,
      });
    }, 1500);
  };

  useEffect(() => {
    if (user) {
      setDoneTask({
        twitter: user?.twitter,
        telegram: user?.telegram,
      });
    }
  }, [user]);

  return (
    <Container>
      {isVerifying && (
        <div className="screen-loading-overlay">
          <ReactLoading type="spinningBubbles" color="#ffffff" height={60} width={60} />
          <div>Verifying your mission</div>
        </div>
      )}
      <TutorialContainer>
        <ImageContainer>
          <img src={AirdropTutorialImg} alt="airdrop" />
          <div>Don’t forget airdrop grr</div>
        </ImageContainer>
        <InstructionContainer>
          {!user && (
            <RequireConnectWallet>
              <ClaimButton onClick={() => setVisible(true)}>Connect wallet</ClaimButton>
            </RequireConnectWallet>
          )}
          <div className="flex">
            <div>
              <span className="yellow">Let’s follow Inscription style</span> 🦍
            </div>
            <div>
              GET <span className="yellow">20 POINTS</span>
            </div>
          </div>
          <div className="flex">
            <div>1. Follow twitter</div>
            {doneTask.twitter ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('twitter')}>FOLLOW</button>
            )}
          </div>
          <div className="flex">
            <div>2. Join our TG</div>
            {doneTask.telegram ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('telegram')}>JOIN</button>
            )}
          </div>
          {/* <div className="flex">
            <div className="text-left">3. send 0 $SOL or 1 $BONK/ 1 $ANALOS/ 1 $MYRO to This Wallet</div>
            {doneTask.deposit ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleCopyToClipboard(masterAddress, 'address')}>
                {isCopying.address ? 'Copied' : 'Copy'}
              </button>
            )}
          </div> */}
          {/* <div className='long-text'><span>{masterAddress}</span></div> */}
          <div className="flex">
            <div>To claim $MUF airdrop</div>
            <div>Note: 24h Snapshoot</div>
          </div>
          <div className="flex">
            <div className="yellow">You have invite friend</div>
            <div>
              Get <span className="yellow">20 POINTS</span>
            </div>
          </div>
          <div className="flex">
            <div className="text-left">1. Invite</div>
            <button onClick={() => handleCopyToClipboard(userRefLink, 'invite')}>
              {isCopying.invite ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="flex">
            <div className="small text-left">
              Invited users, please complete mufasa tasks for a successful referral. Thank you!
            </div>
          </div>
        </InstructionContainer>
      </TutorialContainer>
    </Container>
  );
}
