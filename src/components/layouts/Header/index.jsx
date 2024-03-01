import logoImg from '@/assets/images/svg/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderContainer } from './Header.styled';
import HeaderMenu from './Menu';
import HeaderMenuMobile from './MenuMobile';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={logoImg} />
        </Link>
        <HeaderMenu />
        <HeaderMenuMobile />
      </HeaderContainer>
    </Container>
  );
}
