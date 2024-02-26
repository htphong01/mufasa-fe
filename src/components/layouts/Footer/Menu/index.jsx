import React from 'react';
import { FooterMenuContainer } from '../Footer.styled';
import { Link } from 'react-router-dom';

export default function FooterMenu() {
  return (
    <FooterMenuContainer>
      <div>MUFASA</div>
      <div>
        <Link to="/docs">DOCS</Link>
        <Link to="/airdrop">AIRDROP</Link>
      </div>
    </FooterMenuContainer>
  );
}
