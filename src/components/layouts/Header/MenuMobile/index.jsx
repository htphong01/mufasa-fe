import React, { useRef, useState } from 'react';
import { HeaderMenuMobileContainer, HeaderMenuMobileList } from '../Header.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function HeaderMenuMobile() {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleNavigate = (route) => {
    setIsOpenMenu(!isOpenMenu)
    handleChangeIcon();
  }

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
          <Link to="#" onClick={handleNavigate}>JOIN JP</Link>
          <Link to="/airdrop" onClick={handleNavigate}>AIRDROP</Link>
        </HeaderMenuMobileList>
      )}
    </HeaderMenuMobileContainer>
  );
}
