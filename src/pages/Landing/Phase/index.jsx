import phaseBanner from '@/assets/images/png/phase-banner.png';
import React from 'react';
import { Card, CardContainer, CardTitle, Container, PhaseContainer, PhaseSubTitle, PhaseTitle } from './Phase.styled';

export default function Phase() {
  return (
    <Container>
      <img src={phaseBanner} />
      <PhaseContainer>
        <PhaseTitle>TOKENOMIC</PhaseTitle>
        <PhaseSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus.
        </PhaseSubTitle>
        <CardContainer>
          <div>
            <CardTitle>PHASE 1</CardTitle>
            <Card>
              <p></p>
              <div>
                <ul>
                  <li>Research (visual, chain, marketing strategy, & partners)</li>
                  <li>UX & UI for DEX</li>
                  <li>Marketing Planning</li>
                  <li>Community Managing Planning</li>
                  <li>Social Channel Set-up</li>
                  <li>Partners List Collecting</li>
                  <li>Reach Out NAME</li>
                </ul>
              </div>
            </Card>
          </div>
          <div>
            <CardTitle>PHASE 1</CardTitle>
            <Card>
              <p></p>
              <div>
                <ul>
                  <li>Research (visual, chain, marketing strategy, & partners)</li>
                  <li>UX & UI for DEX</li>
                  <li>Marketing Planning</li>
                  <li>Community Managing Planning</li>
                  <li>Social Channel Set-up</li>
                  <li>Partners List Collecting</li>
                  <li>Reach Out NAME</li>
                </ul>
              </div>
            </Card>
          </div>
          <div>
            <CardTitle>PHASE 1</CardTitle>
            <Card>
              <p></p>
              <div>
                <ul>
                  <li>Research (visual, chain, marketing strategy, & partners)</li>
                  <li>UX & UI for DEX</li>
                  <li>Marketing Planning</li>
                  <li>Community Managing Planning</li>
                  <li>Social Channel Set-up</li>
                  <li>Partners List Collecting</li>
                  <li>Reach Out NAME</li>
                </ul>
              </div>
            </Card>
          </div>
        </CardContainer>
      </PhaseContainer>
    </Container>
  );
}
