import { styled, keyframes } from 'styled-components';

const slideTopToBottom = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 150px; 
  }
`;

export const HeaderMenuMobileList = styled.div`
  position: fixed;
  top: 82px;
  left: 0;
  right: 0;
  z-index: 9989;
  background-color: ${({ theme }) => theme.colors.neural['950']};
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* animation: ${slideTopToBottom} 1s linear; */
  /* transition: all 0.3s ease; */

  > a {
    display: block;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.neural['0']};
    font-family: 'Caesar Dressing';
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.neural['900']};
    }
  }
`;

export const HeaderMenuMobileContainer = styled.div`
  display: none;
  padding: 18px;
  background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
  height: 48px;
  width: 56px;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    display: block;
  }

  .bar-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.neural['900']};
    transition: 0.4s;
  }

  .bar3 {
    margin: 0;
  }

  .change .bar1 {
    transform: translate(0, 7px) rotate(-45deg);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -7px) rotate(45deg);
  }
`;

export const BuyButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 48px;
  height: 48px;
  background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
  border-radius: 4px;
  font-family: 'Caesar Dressing';
  color: ${({ theme }) => theme.colors.neural['900']};
`;

export const MenuItemList = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > a {
    display: block;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.neural['0']};
    font-family: 'Caesar Dressing';
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.neural['900']};
    }
  }
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neural['950']};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9990;

  @media screen and (max-width: 768px) {
    height: 82px;
  }
`;

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 56px;
    }
  }

  @media screen and (max-width: 1360px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 24px;
  }
`;
