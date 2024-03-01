import React, { useRef } from 'react';
import { HeaderMenuMobileContainer } from '../Header.styled';

export default function HeaderMenuMobile() {
    const ref = useRef();

    const handleChangeIcon = () => {
        ref.current.classList.toggle('change');
    }

  return (
    <HeaderMenuMobileContainer>
      <div className="bar-container" ref={ref} onClick={handleChangeIcon}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </HeaderMenuMobileContainer>
  );
}
