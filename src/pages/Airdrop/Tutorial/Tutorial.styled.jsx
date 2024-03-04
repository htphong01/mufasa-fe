import { styled } from 'styled-components';

export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;
  border-radius: 16px;
  padding: 48px 24px;
  overflow: hidden;

  > div {
    font-family: 'Caesar Dressing';
    text-align: center;
    text-wrap: wrap;
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
  padding: 96px 0 48px;
  gap: 48px;

  @media screen and (max-width: 1310px) {
    max-width: unset;
    padding: 96px 100px 24px;
  }

  @media screen and (max-width: 1130px) {
    padding: 96px 24px 24px;
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
