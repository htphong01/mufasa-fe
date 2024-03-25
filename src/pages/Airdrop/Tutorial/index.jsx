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
          <div className='flex'>
            <div><span className='yellow'>Let’s follow Inscription style</span> 🦍</div>
            <div>GET <span className='yellow'>20 POINTS</span> </div>
          </div>
          <div className='flex'>
            <div>1. Follow twitter</div>
            <button>FOLLOW</button>
          </div>
          <div className='flex'>
            <div>2. Join our TG</div>
            <button>JOIN</button>
          </div>
          <div className='flex'>
            <div className='text-left'>3. send 0 $SOL or 1 $BONK/ 1 $ANALOS/ 1 $MYRO to This Wallet</div>
            <button>Copy</button>
          </div>
          <div>EwzjM1jFGhXo8q15nLkVWFsRz1eoyP3PAkFeXdNkFemA</div>
          <div>To claim $RAJ airdrop</div>
          <div>Note: 24h Snapshoot</div>
        </InstructionContainer>
      </TutorialContainer>
    </Container>
  );
}
