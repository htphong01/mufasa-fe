import React from 'react'
import { Container, FooterContainer } from './Footer.styled'
import FooterLogo from './Logo'
import FooterMenu from './Menu'
import FooterCommunity from './Community'

export default function Footer() {
  return (
    <Container>
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
