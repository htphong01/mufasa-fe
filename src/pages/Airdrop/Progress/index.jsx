import React, { useState } from 'react';
import { ClaimButton, Container, ProgressBar, ProgressContainer, ProgressLabel } from './Progress.styled';

export default function Progress() {
  const [progress, setProgress] = useState(24);

  return (
    <Container>
      <ProgressContainer>
        <ProgressLabel>
          <div>
            <label>Current airdrop allocation</label>
            <span>0 $MUF</span>
          </div>
          <div>
            <label>Total Airdrop: 5,000,000</label>
            <span>$MUF</span>
          </div>
        </ProgressLabel>
        <ProgressBar width={progress}>
          <div></div>
        </ProgressBar>
        <ClaimButton>
            <span>buyyyyyyy grrrrr</span>
        </ClaimButton>
      </ProgressContainer>
    </Container>
  );
}
