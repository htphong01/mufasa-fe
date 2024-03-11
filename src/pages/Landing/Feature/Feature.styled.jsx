import { styled } from 'styled-components';

export const CardIconContainer = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
  border-radius: 999px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 30px;
  }
`;

export const Card = styled.div`
  padding: 40px 32px 60px;
  border-radius: 32px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 40px 32px 24px;
  }

  > p {
    width: 100%;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
  }

  > span {
    width: 100%;
    font-family: 'Caesar Dressing';
    text-align: center;
    color: #c8c8c8;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 24px;

  @media screen and (max-width: 1310px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureTitle = styled.div`
  font-size: 48px;
  line-height: 38px;
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['900']};
`;

export const FeatureSubTitle = styled.div`
  font-family: 'Caesar Dressing';
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['900']};
`;

export const FeatureContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  gap: 32px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  @media screen and (max-width: 1310px) {
    max-width: 1080px;
    padding: 0 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 0px 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;

  > img {
    width: 100%;

    @media screen and (max-width: 1370px) {
      height: 900px;
      object-fit: cover;
    }

    @media screen and (max-width: 900px) {
      height: 1000px;
    }

    @media screen and (max-width: 768px) {
      height: 1300px;
    }

    @media screen and (max-width: 533px) {
      height: 1500px;
    }
  }
`;
