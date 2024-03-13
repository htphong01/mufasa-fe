import phaseBanner from '@/assets/images/png/phase-banner.png';
import React from 'react';
import { Card, CardContainer, CardTitle, Container, PhaseContainer, PhaseSubTitle, PhaseTitle } from './Phase.styled';

export default function Phase() {
  return (
    <Container>
      <img src={phaseBanner} />
      <PhaseContainer>
        <PhaseTitle>ROADMAP</PhaseTitle>
        {/* <PhaseSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mauris id ante dapibus.
        </PhaseSubTitle> */}
        <CardContainer>
          <div>
            <CardTitle>PHASE 1</CardTitle>
            <Card>
              <p></p>
              <div>
                <ul>
                  <li>Stage 1 - Assemble Team</li>
                  <li>Stage 2 - Socials</li>
                  <li>Stage 3 - Marketing Campaign</li>
                  <li>Stage 4 - Community building </li>
                </ul>
              </div>
            </Card>
          </div>
          <div>
            <CardTitle>PHASE 2</CardTitle>
            <Card>
              <p></p>
              <div>
                <ul>
                  <li>Stage 5 - Introduced Mufasa </li>
                  <li>Stage 6 - Listing Sites</li>
                  <li>Stage 7 - CEX Listings</li>
                  <li>Stage 8 - Airdrop</li>
                </ul>
              </div>
            </Card>
          </div>
          <div>
            <CardTitle>PHASE 3</CardTitle>
            <Card>
              <p></p>
              <div>
                <ul>
                  <li>Stage 9 - Partnerships</li>
                  <li>Stage 10 - Ecosystem building</li>
                  <li>Stage 11 - Mufasa Governance</li>
                  <li>Stage 12 - more to come.</li>
                </ul>
              </div>
            </Card>
          </div>
        </CardContainer>
      </PhaseContainer>
    </Container>
  );
}
