import React from 'react';
import { Card, CardContainer, CardIconContainer, Container, FeatureContainer, FeatureSubTitle, FeatureTitle } from './Feature.styled';
import featureBanner from '@/assets/images/png/feature-banner.png'
import feature1 from '@/assets/images/svg/feature-1.svg';
import feature2 from '@/assets/images/svg/feature-2.svg';
import feature3 from '@/assets/images/svg/feature-3.svg';
import feature4 from '@/assets/images/svg/feature-4.svg';

export default function Feature() {
  return (
    <Container>
      <img src={featureBanner} />
      <FeatureContainer>
        <FeatureTitle>FEATURE</FeatureTitle>
        <FeatureSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus.</FeatureSubTitle>
        <CardContainer>
          <Card>
            <CardIconContainer>
              <img src={feature1} />
            </CardIconContainer>
            <p>Deflationary</p>
            <span>Every Buy and Sell burns 1% of Doggo Inu from the transaction</span>
          </Card>
          <Card>
            <CardIconContainer>
              <img src={feature2} />
            </CardIconContainer>
            <p>Auto LP BURN</p>
            <span>1% of Doggo INU from every transaction will automatically zapped into LP and burned. This means forever increasing liquidity</span>
          </Card>
          <Card>
            <CardIconContainer>
              <img src={feature3} />
            </CardIconContainer>
            <p>Fixed Supply</p>
            <span>Max total Supply of Doggo Inu will be fixed at 888 Million with no additional Token to be minted in the future.</span>
          </Card>
          <Card>
            <CardIconContainer>
              <img src={feature4} />
            </CardIconContainer>
            <p>Staking Reward</p>
            <span>Single Staking reward will be available in the Staking page. Additional Staking and Holding rewards will be added soon.</span>
          </Card>
        </CardContainer>
      </FeatureContainer>
    </Container>
  );
}
