import React from 'react';
import {
  Card,
  CardContainer,
  CardIconContainer,
  Container,
  FeatureContainer,
  FeatureSubTitle,
  FeatureTitle,
} from './Feature.styled';
import featureBanner from '@/assets/images/png/feature-banner.png';
import feature1 from '@/assets/images/svg/feature-1.svg';
import feature2 from '@/assets/images/svg/feature-2.svg';
import feature3 from '@/assets/images/svg/feature-3.svg';
import feature4 from '@/assets/images/svg/feature-4.svg';

export default function Feature() {
  return (
    <Container>
      <img src={featureBanner} />
      <FeatureContainer>
        <FeatureTitle>THE LEGACY</FeatureTitle>
        <FeatureSubTitle>Mufasa's legacy lives on, and his love and respect are forever remembered.</FeatureSubTitle>
        <CardContainer>
          <Card>
            <CardIconContainer>
              <img src={feature1} />
            </CardIconContainer>
            <p>MUFASA TOKEN</p>
            <span>
              MUFASA token will be used to power the Mufasa ecosystem, through governance and building a strong
              ecosystem.
            </span>
          </Card>
          <Card>
            <CardIconContainer>
              <img src={feature2} />
            </CardIconContainer>
            <p>LIQUIDITY POOL</p>
            <span>
              The majority of the MUFASA token is committed into liquidity, to provide deeper/high liquidity in order to
              create large trading volume and a narrow spread between buy and sell orders. Mufasa liquidity tokens will
              be distributed over a long period of time.
            </span>
          </Card>
          <Card>
            <CardIconContainer>
              <img src={feature3} />
            </CardIconContainer>
            <p>Fixed Supply</p>
            <span>
              The MUFASA token has a fixed supply of 95,000,000,000,000 tokens which is coded to exist in the lifetime
              of the Mufasa. The MUFASA fixed supply is the same as the maximum supply.
            </span>
          </Card>
          <Card>
            <CardIconContainer>
              <img src={feature4} />
            </CardIconContainer>
            <p>Staking Reward</p>
            <span>
              MUFASA token holders will be able to stake their token and earn rewards. This is to encourage our long
              term supporters.
            </span>
          </Card>
        </CardContainer>
      </FeatureContainer>
    </Container>
  );
}
