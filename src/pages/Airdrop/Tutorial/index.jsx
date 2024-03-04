import React from 'react';
import { Container, ImageContainer, InstructionContainer, TutorialContainer } from './Tutorial.styled';
import AirdropTutorialImg from '@/assets/images/png/airdrop-tutorial.png';

export default function Tutorial() {
  return (
    <Container>
      <TutorialContainer>
        <ImageContainer>
          <img src={AirdropTutorialImg} alt="airdrop" />
          <div>Don’t forget airdrop grr</div>
        </ImageContainer>
        <InstructionContainer>
          <div>Let’s follow Inscription style 🦍</div>
          <div>1. Follow twitter</div>
          <div>2. Join our TG</div>
          <div>send 0 $SOL or 1 $BONK/ 1 $ANALOS/ 1 $MYRO to This Wallet</div>
          <div>EwzjM1jFGhXo8q15nLkVWFsRz1eoyP3PAkFeXdNkFemA</div>
          <div>To claim $RAJ airdrop</div>
          <div>Note: 24h Snapshoot</div>
        </InstructionContainer>
      </TutorialContainer>
    </Container>
  );
}
