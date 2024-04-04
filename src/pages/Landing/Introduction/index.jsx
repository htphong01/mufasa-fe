import React from 'react';
import { Container, IntroductionContainer } from './Introduction.styled';
import mainImg from '@/assets/images/png/introduction-1.png';
import img2 from '@/assets/images/png/introduction-2.png';
import img3 from '@/assets/images/png/introduction-3.png';
import img4 from '@/assets/images/png/introduction-4.png';

export default function Introduction() {
  return (
    <Container>
      <IntroductionContainer>
        <div>
          <p>
            Our <br /> Mission
          </p>
          <p className="mobile">Our Mission</p>
          <span>Our mission is to restore confidence in memes again and have fun while we are on Earth.</span>
        </div>
        <div>
          <div>
            <img src={mainImg} />
            <div className="image image2">
              <img src={img2} />
            </div>
            <div className="image image3">
              <img src={img3} />
            </div>
            <div className="image image4">
              <img src={img4} />
            </div>
          </div>
        </div>
      </IntroductionContainer>
    </Container>
  );
}
