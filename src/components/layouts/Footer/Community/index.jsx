import React from 'react';
import { FooterCommunityContainer } from '../Footer.styled';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function FooterCommunity() {
  return (
    <FooterCommunityContainer>
      <div>JOIN OUR COMMUNITY</div>
      <div>
        <Link to="#">
          <Icon fontSize={32} icon="mingcute:youtube-fill" />
        </Link>
        <Link to="https://t.me/mufasalol">
          <Icon fontSize={32} icon="ic:baseline-telegram" />
        </Link>
        <Link to="https://x.com/mufasalol_?t=tpxt09CGS2DuqfPBB7nhsg&s=09">
          <Icon fontSize={32} icon="mdi:twitter" />
        </Link>
        <Link to="#">
          <Icon fontSize={32} icon="ic:baseline-discord" />
        </Link>
      </div>
    </FooterCommunityContainer>
  );
}
