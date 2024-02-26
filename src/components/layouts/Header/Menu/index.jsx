import React from 'react';
import { BuyButton, HeaderMenuContainer, MenuItemList } from '../Header.styled';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
  return (
    <HeaderMenuContainer>
      <MenuItemList>
        <Link to="/forest">FOREST</Link>
        <Link to="/airdrop">AIRDROP</Link>
      </MenuItemList>
      <BuyButton>buyyyyyyy grrrrr</BuyButton>
    </HeaderMenuContainer>
  );
}
