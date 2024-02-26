import styled from 'styled-components';

export const BuyButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 48px;
  gap: 8px;

  height: 48px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;
  border-radius: 4px;

  font-family: 'Caesar Dressing';
  color: #ffd029;
  text-transform: uppercase;
  width: 50%
`;

export const BannerDescription = styled.div`
  font-family: 'Caesar Dressing';
  color: ${({ theme }) => theme.colors.neural['800']};
  width: 80%;
`;

export const BannerHeading = styled.div`
  font-size: 96px;
  line-height: 64px;
  color: ${({ theme }) => theme.colors.neural['900']};
  margin-bottom: 40px;
`;

export const Container = styled.div`
    position: relative;

    > img {
        width: 100%;
    }


  > div {
    margin: auto;
    flex: 1;
    height: 100%;
    display: flex;
    max-width: 1092px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      width: 50%;
    }
  }
`;
