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

  const userRefLink = `${window.location.origin}/airdrop?ref=${user?.code}`;

  const [isVerifying, setIsVerifying] = useState(false);
  const [doneTask, setDoneTask] = useState({
    telegramGroup: user?.telegramGroup || false,
    telegramAnnouncement: user?.telegramAnnouncement || false,
    mufasaTwitter: user?.mufasaTwitter || false,
    lionKingTwitter: user?.lionKingTwitter || false,
    mufasaDiscord: user?.mufasaDiscord || false,
  });
  const [isCopying, setIsCopying] = useState({
    address: false,
    invite: false,
  });

  const handleOpenLink = async (type) => {
    try {
      let url = '';
      switch (type) {
        case 'telegramGroup':
          url = 'https://t.me/mufasalol';
          break;
        case 'telegramAnnouncement':
          url = 'https://t.me/mufasaannoucement';
          break;
        case 'mufasaTwitter':
          url = 'https://x.com/mufasalol_';
          break;
        case 'lionKingTwitter':
          url = 'https://twitter.com/Dublyking';
          break;
        case 'mufasaDiscord':
          url = 'https://discord.com/invite/hnNPHejPDZ';
          break;
      }
      setIsVerifying(true);
      window.open(url, '_system');
      setTimeout(async () => {
        await updateUser(user.address, { [type]: true });
        setIsVerifying(false);
        setDoneTask({
          ...doneTask,
          [type]: true,
        });
        toast.success('Verify successfully');
      }, 15000);
    } catch (error) {
      setIsVerifying(false);
      toast.error(error.message);
    }
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
        telegramGroup: user?.telegramGroup,
        telegramAnnouncement: user?.telegramAnnouncement,
        mufasaTwitter: user?.mufasaTwitter,
        lionKingTwitter: user?.lionKingTwitter,
        mufasaDiscord: user?.mufasaDiscord,
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
          <div>Don’t forget MUFASA airdrop</div>
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
            <div>1. Join Mufasa Telegram Group</div>
            {doneTask.telegramGroup ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('telegramGroup')}>JOIN</button>
            )}
          </div>
          <div className="flex">
            <div>2. Join Mufasa Telegram Announcement Channel </div>
            {doneTask.telegramAnnouncement ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('telegramAnnouncement')}>JOIN</button>
            )}
          </div>
          <div className="flex">
            <div>3. Follow Mufasa Twitter</div>
            {doneTask.mufasaTwitter ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('mufasaTwitter')}>FOLLOW</button>
            )}
          </div>
          <div className="flex">
            <div>4. Follow The Lion King On Twitter</div>
            {doneTask.lionKingTwitter ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('lionKingTwitter')}>FOLLOW</button>
            )}
          </div>
          <div className="flex">
            <div>5. Join Mufasa Discord</div>
            {doneTask.mufasaDiscord ? (
              <Icon fontSize={28} color="#ffd029" icon="ic:outline-check-box" />
            ) : (
              <button onClick={() => handleOpenLink('mufasaDiscord')}>JOIN</button>
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
            <div>Claim Your Mufasa Airdrop</div>
            <div className="note">(Airdrop will be distributed at later date)</div>
          </div>
          <div className="flex">
            <div className="yellow">Want more Mufasa token?</div>
          </div>
          <div className="flex">
            <div className="small text-left">Share your referral link to your friends to earn more Mufasa token</div>
          </div>
          <div className="flex">
            <div className="text-left">1. Invite</div>
            <button onClick={() => handleCopyToClipboard(userRefLink, 'invite')}>
              {isCopying.invite ? 'Copied' : 'Copy'}
            </button>
          </div>
        </InstructionContainer>
      </TutorialContainer>
    </Container>
  );
}
