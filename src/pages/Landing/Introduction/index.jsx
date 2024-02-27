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
            The Best <br /> Story Parody
          </p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus, ut dictum ex
            ultricies. Fusce pulvinar turpis at massa viverra, in suscipit lacus commodo. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed dapibus mauris id ante dapibus, ut dictum ex ultricies. Fusce pulvinar
            turpis at massa viverra, in suscipit lacus commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed dapibus mauris id ante dapibus, ut dictum ex ultricies. Fusce pulvinar turpis at massa viverra, in
            suscipit lacus
          </span>
        </div>
        <div>
          <img src={mainImg} />
          <img src={img2} className='image image2' />
          <img src={img3} className='image image3' />
          <img src={img4} className='image image4' />
        </div>
      </IntroductionContainer>
    </Container>
  );
}
