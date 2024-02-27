import { styled } from 'styled-components';

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
`;

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;
