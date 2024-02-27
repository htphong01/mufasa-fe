import { styled } from 'styled-components';

export const Card = styled.div`
  width: 100%;

  > p {
    margin: 0;
    padding: 0;
    height: 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #ffd029;
  }

  > div {
    padding: 48px 32px;
    background-color: ${({ theme }) => theme.colors.neural['950']};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    > ul {
      > li {
        font-family: 'Caesar Dressing';
        opacity: 0.6;
      }
    }
  }
`;

export const CardTitle = styled.div`
  font-size: 48px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['50']};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 32px;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const PhaseTitle = styled.div`
  font-size: 48px;
  line-height: 38px;
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['900']};
`;

export const PhaseSubTitle = styled.div`
  font-family: 'Caesar Dressing';
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['900']};
`;

export const PhaseContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1092px;
  gap: 32px;
  margin-top: 40px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;

  > img {
    width: 100%;
  }
`;
