import logoImg from '@/assets/images/svg/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderContainer } from './Header.styled';
import HeaderMenu from './Menu';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={logoImg} />
        </Link>
        <HeaderMenu />
      </HeaderContainer>
    </Container>
  );
}
