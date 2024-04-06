import React from 'react';
import { BannerDescription, BannerHeading, BuyButton, Container } from './Banner.styled';
import bannerImg from '@/assets/images/png/banner.png';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();

  const handleBuyMufasa = () => {
    navigate('/airdrop')
  }

  return (
    <Container>
      <img src={bannerImg} />
      <div>
        <div>
          <BannerHeading>
            The Best Story
            <br /> Parody
          </BannerHeading>
          <BannerDescription>
            The king of memes is here - well trained to respect the Circle of Memes, waited for other memes to have
            their time in the space and it's time for MUFASA to rule as the king and to take responsibility for his
            kingdom and subjects.
          </BannerDescription>
          <BuyButton onClick={handleBuyMufasa}>BUY MUFASA</BuyButton>
        </div>
      </div>
    </Container>
  );
}
