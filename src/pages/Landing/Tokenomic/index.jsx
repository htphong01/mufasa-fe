import React from 'react';
import {
  Chart,
  ChartContainer,
  ChartInfo,
  ChartInfoContainer,
  Container,
  Reminder,
  TokenomicContainer,
  TokenomicSubTitle,
  TokenomicTitle,
} from './Tokenomic.styled';
import iconImg from '@/assets/images/svg/icon.svg';
import tokenomicChartImg from '@/assets/images/png/tokenomic-chart.png';

export default function Tokenomic() {
  return (
    <Container>
      <TokenomicContainer>
        <TokenomicTitle>TOKENOMIC</TokenomicTitle>
        {/* <TokenomicSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus
        </TokenomicSubTitle> */}
        <ChartContainer>
          <ChartInfoContainer>
            <ChartInfo solidColor="#DE6E6A">
              <div>
                <div className="solid"></div>
                <span>15%</span>
              </div>
              <div>Staking Reward</div>
            </ChartInfo>
            <ChartInfo solidColor="#84BFDB">
              <div>
                <div className="solid"></div>
                <span>10%</span>
              </div>
              <div>Team</div>
            </ChartInfo>
            <ChartInfo solidColor="#599F76">
              <div>
                <div className="solid"></div>
                <span>5%</span>
              </div>
              <div>Marketing</div>
            </ChartInfo>
          </ChartInfoContainer>
          <img src={tokenomicChartImg} />
          <ChartInfoContainer>
            <ChartInfo solidColor="#9EC97F">
              <div>
                <div className="solid"></div>
                <span>60%</span>
              </div>
              <div>Liquidity</div>
            </ChartInfo>
            <ChartInfo solidColor="#5971C0">
              <div>
                <div className="solid"></div>
                <span>10%</span>
              </div>
              <div>Airdrop</div>
            </ChartInfo>
          </ChartInfoContainer>
          <div className="mobile">
            <ChartInfo solidColor="#DE6E6A">
              <div>
                <div className="solid"></div>
                <span>15%</span>
              </div>
              <div>Staking Reward</div>
            </ChartInfo>
            <ChartInfo solidColor="#9EC97F">
              <div>
                <div className="solid"></div>
                <span>60%</span>
              </div>
              <div>Liquidity</div>
            </ChartInfo>
            <ChartInfo solidColor="#84BFDB">
              <div>
                <div className="solid"></div>
                <span>10%</span>
              </div>
              <div>Team</div>
            </ChartInfo>
            <ChartInfo solidColor="#5971C0">
              <div>
                <div className="solid"></div>
                <span>10%</span>
              </div>
              <div>Airdrop</div>
            </ChartInfo>
          </div>
          <div className='chart-info-mobile'>
            <ChartInfo solidColor="#599F76">
              <div>
                <div className="solid"></div>
                <span>5%</span>
              </div>
              <div>Marketing</div>
            </ChartInfo>
          </div>
        </ChartContainer>
        <Reminder>Don’t forget Mufasa airdrop</Reminder>
      </TokenomicContainer>
    </Container>
  );
}
