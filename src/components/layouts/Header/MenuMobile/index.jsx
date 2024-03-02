import React, { useRef, useState } from 'react';
import { HeaderMenuMobileContainer, HeaderMenuMobileList } from '../Header.styled';

export default function HeaderMenuMobile() {
  const ref = useRef();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleChangeIcon = () => {
    ref.current.classList.toggle('change');
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <HeaderMenuMobileContainer>
      <div className="bar-container" ref={ref} onClick={handleChangeIcon}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {isOpenMenu && (
        <HeaderMenuMobileList>
          <a href="/Forest">FOREST</a>
          <a href="/airdrop">AIRDROP</a>
        </HeaderMenuMobileList>
      )}
    </HeaderMenuMobileContainer>
  );
}
