import React from 'react';
import { FooterLogoContainer } from '../Footer.styled';
import logoImg from '@/assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';

export default function FooterLogo() {
  return (
    <FooterLogoContainer>
      <Link to="/">
        <img src={logoImg} />
      </Link>
      <div>THE BEST STORY</div>
      <span>© 2024 meme. All rights reserved.</span>
    </FooterLogoContainer>
  );
}
