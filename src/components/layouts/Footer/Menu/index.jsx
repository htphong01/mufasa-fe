import React from 'react';
import { FooterMenuContainer } from '../Footer.styled';
import { Link } from 'react-router-dom';

export default function FooterMenu() {
  return (
    <FooterMenuContainer>
      <div>MUFASA</div>
      <div>
        <a href="https://mufasas-organization.gitbook.io/mufasa" target='_blank'>DOCS</a>
        <Link to="/airdrop">AIRDROP</Link>
      </div>
    </FooterMenuContainer>
  );
}
