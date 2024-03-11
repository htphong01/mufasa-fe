import { styled } from 'styled-components';

export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;
  border-radius: 16px;
  padding: 48px;
  overflow: hidden;

  > div {
    font-family: 'Caesar Dressing';
    text-align: center;
    text-wrap: wrap;

    &:first-child {
      background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;

  > div {
    font-size: 64px;
    line-height: 96px;
    text-align: center;
    color: ${({ theme }) => theme.colors.neural['50']};
    @media screen and (max-width: 768px) {
      font-size: 48px;
    }
  }
`;

export const TutorialContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  max-width: 1092px;
  padding: 96px 0 96px;
  gap: 48px;

  @media screen and (max-width: 1310px) {
    max-width: unset;
    padding: 96px 100px 48px;
  }

  @media screen and (max-width: 1130px) {
    padding: 96px 24px 48px;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
