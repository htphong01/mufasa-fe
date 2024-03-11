import { styled } from 'styled-components';

export const Card = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  gap: 10px;

  > p {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: 'Caesar Dressing';
    font-size: 24px;
    line-height: 24px;
  }

  > span {
    font-family: 'Caesar Dressing';
    text-align: center;
    color: #ffffff;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin: 0;
    padding: 0;
    font-size: 96px;
    line-height: 75px;
    margin-bottom: 36px;

    color: ${({ theme }) => theme.colors.neural['50']};
  }

  > span {
    font-family: 'Caesar Dressing';
    color: #f6f6f6;
  }
`;

export const IntroductionContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  max-width: 1092px;
  padding: 96px 0 48px;
  gap: 56px;

  @media screen and (max-width: 1310px) {
    max-width: unset;
    padding: 96px 100px 48px;
  }

  @media screen and (max-width: 1130px) {
    padding: 96px 24px 48px;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 48px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
