import { styled } from 'styled-components';

export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;
  border-radius: 16px;

  > div {
    font-family: 'Caesar Dressing';
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    font-size: 64px;
    line-height: 64px;
    text-align: center;
    color: ${({ theme }) => theme.colors.neural['50']};
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
`;

export const Container = styled.div`
  width: 100%;
`;
