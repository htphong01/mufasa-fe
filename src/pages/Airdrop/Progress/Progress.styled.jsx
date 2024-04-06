import { styled } from 'styled-components';

export const AlreadyClaim = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    font-family: 'Caesar Dressing';
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;

    > span {
      background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`;

export const ClaimButton = styled.button`
  display: flex;
  margin: 24px auto 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 48px;
  gap: 8px;
  cursor: pointer;

  height: 48px;
  width: fit-content;

  background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
  border-radius: 4px;

  &:disabled {
    background: #475467;
  }

  > span {
    font-family: 'Caesar Dressing';
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.neural['900']};
  }
`;

export const ProgressBar = styled.div`
  height: 12px;
  background: #475467;

  > div {
    background: linear-gradient(249.51deg, #00ffa3 -47.16%, #dc1fff 140.55%);
    width: ${(props) => `${props.width}%` || '0%'};
    height: 100%;
  }
`;

export const ProgressLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 160px;

  @media screen and (max-width: 450px) {
    gap: unset;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    > label {
      font-family: 'Caesar Dressing';
      font-size: 24px;
      line-height: 24px;
      background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    > span {
      font-family: 'Open Sans';
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      color: #fcfcfd;
    }
  }
`;

export const ProgressContainer = styled.div`
  margin: auto;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  height: 100%;
  display: flex;
  max-width: 1092px;
  padding: 96px 0 24px;

  @media screen and (max-width: 1310px) {
    max-width: unset;
    padding: 96px 100px 24px;
  }

  @media screen and (max-width: 1130px) {
    padding: 96px 24px 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
