import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BuyButton, HeaderMenuContainer, MenuItemList } from '../Header.styled';

export default function HeaderMenu() {
  const { publicKey, disconnect } = useWallet();
  const navigate = useNavigate();

  return (
    <HeaderMenuContainer>
      <MenuItemList>
        <Link to="#">JOIN LP</Link>
        <Link to="/airdrop">AIRDROP</Link>
      </MenuItemList>
      <BuyButton onClick={publicKey ? disconnect : () => navigate('/airdrop')}>{publicKey ? 'Disconnect' : 'BUY MUFASA'}</BuyButton>
    </HeaderMenuContainer>
  );
}
