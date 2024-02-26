import React from 'react';
import { BannerDescription, BannerHeading, BuyButton, Container } from './Banner.styled';
import bannerImg from '@/assets/images/png/banner.png';

export default function Banner() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus, ut dictum ex
            ultricies. Fusce pulvinar turpis at massa viverra, in suscipit lacus commodo.
          </BannerDescription>
          <BuyButton>buyyyyyyy grrrrr</BuyButton>
        </div>
      </div>
    </Container>
  );
}
