import React from 'react'
import { Container, FooterContainer } from './Footer.styled'
import FooterLogo from './Logo'
import FooterMenu from './Menu'
import FooterCommunity from './Community'
import { useLocation } from 'react-router-dom'

const footerDarkBackground = [
  '/airdrop'
]

export default function Footer() {

  const location = useLocation();

  return (
    <Container dark={footerDarkBackground.includes(location.pathname)}>
      <FooterContainer>
        <FooterLogo />
        <div className='right'>
            <FooterMenu />
            <FooterCommunity />
        </div>
      </FooterContainer>
    </Container>
  )
}
