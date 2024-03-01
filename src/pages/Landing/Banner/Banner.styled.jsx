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
  width: 50%;

  @media screen and (max-width: 768px) {
    width: fit-content;
    text-wrap: nowrap;
  }
`;

export const BannerDescription = styled.div`
  font-family: 'Caesar Dressing';
  color: ${({ theme }) => theme.colors.neural['800']};
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BannerHeading = styled.div`
  font-size: 96px;
  line-height: 64px;
  color: ${({ theme }) => theme.colors.neural['900']};
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 72px;
  }
`;

export const Container = styled.div`
  position: relative;

  > img {
    width: 100%;

    @media screen and (max-width: 820px) {
      height: 430px;
      object-fit: cover;
    }
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

    @media screen and (max-width: 1360px) {
      padding: 0 100px;
      max-width: 1280px;
    }

    @media screen and (max-width: 1024px) {
      padding: 0 24px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }
  }
`;
