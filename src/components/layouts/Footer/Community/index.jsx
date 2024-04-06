import React from 'react';
import { FooterCommunityContainer } from '../Footer.styled';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function FooterCommunity() {
  return (
    <FooterCommunityContainer>
      <div>JOIN OUR COMMUNITY</div>
      <div>
        <a target="_blank" href="#">
          <Icon fontSize={32} icon="mingcute:youtube-fill" />
        </a>
        <a target="_blank" href="https://t.me/mufasalol">
          <Icon fontSize={32} icon="ic:baseline-telegram" />
        </a>
        <a target="_blank" href="https://x.com/mufasalol_?t=tpxt09CGS2DuqfPBB7nhsg&s=09">
          <Icon fontSize={32} icon="mdi:twitter" />
        </a>
        <a target="_blank" href="https://discord.com/invite/hnNPHejPDZ">
          <Icon fontSize={32} icon="ic:baseline-discord" />
        </a>
      </div>
    </FooterCommunityContainer>
  );
}
