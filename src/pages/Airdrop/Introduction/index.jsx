import React from 'react';
import { Card, CardContainer, Container, IntroductionContainer, TextContainer } from './Introduction.styled';

export default function Introduction() {
  return (
    <Container>
      <IntroductionContainer>
        <TextContainer>
          <p>The Best Story Parody</p>
          <span>
            Welcome to the Meme Lands, where the Circle of Memes is honored and respected by all creatures. But life in
            crypto space isn't always easy, and the memes' existence depends on the leadership of one noble team: Mufasa
            Team.
            <br />
            <br />
            Mufasa, the majestic lion, stands proudly on Pride Rock. His queen, Sarabi, and their newborn cub, Simba,
            stand beside him. The kingdom celebrates the birth of the prince.
          </span>
        </TextContainer>
        <CardContainer>
          <Card>
            <p>THE CHALLENGES</p>
            <span>
              Mufasa's younger brother, Scar, was jealous of Mufasa's strength and power, and sought to overthrow him.
              Scar's influence grew, and he had a band of rogue creatures loyal to him.
            </span>
          </Card>
          <Card>
            <p>THE BETRAYAL </p>
            <span>
              Scar concocted a plan to overthrow Mufasa and take the throne for himself. With the help of misfits,
              including a hyena named Shenzi, Scar proclaimed himself the new king of the Pride Lands but Simba stepped
              in and defeated Scar and reclaimed the throne, restoring peace to the Pride Land
            </span>
          </Card>
        </CardContainer>
      </IntroductionContainer>
    </Container>
  );
}
