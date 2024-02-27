import React from 'react';
import {
  Chart,
  ChartContainer,
  ChartInfo,
  Container,
  Reminder,
  TokenomicContainer,
  TokenomicSubTitle,
  TokenomicTitle,
} from './Tokenomic.styled';
import iconImg from '@/assets/images/svg/icon.svg';

export default function Tokenomic() {
  return (
    <Container>
      <TokenomicContainer>
        <TokenomicTitle>TOKENOMIC</TokenomicTitle>
        <TokenomicSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus
        </TokenomicSubTitle>
        <ChartContainer>
          <ChartInfo>
            <div>
              <div className="solid"></div>
              <span>94%</span>
            </div>
            <div>Liquidity Pool</div>
          </ChartInfo>
          <Chart>
            <div>
              <img src={iconImg} />
            </div>
          </Chart>
          <ChartInfo>
            <div>
              <div></div>
              <span>6%</span>
            </div>
            <div>Marketing Activities</div>
          </ChartInfo>
        </ChartContainer>
        <Reminder>Don’t forget airdrop grr</Reminder>
      </TokenomicContainer>
    </Container>
  );
}
