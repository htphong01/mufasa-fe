import React from 'react'
import AirdropTutorialImg from '@/assets/images/png/airdrop-tutorial.png';
import { ComingSoonContainer, Container } from './ComingSoon.styled';

export default function ComingSoon() {
  return (
    <Container>
        <ComingSoonContainer>
            <img src={AirdropTutorialImg} />
            <span>Coming soon</span>
        </ComingSoonContainer>
    </Container>
  )
}
