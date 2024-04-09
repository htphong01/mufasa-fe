import { styled } from 'styled-components';

export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #191919;
  border-radius: 16px;
  padding: 24px 48px;
  overflow: hidden;
  position: relative;

  > div {
    font-family: 'Caesar Dressing';
    text-wrap: wrap;
    width: 100%;

    &.flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      > div:first-child {
        flex: 1;
      }

      .text-left {
        text-align: left;
      }

      .note {
        font-family: 'Caesar Dressing';
        font-size: 14px;
        line-height: 24px;
        text-align: right;
        color: ${({ theme }) => theme.colors.neural['50']};
      }
    }

    &.long-text {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 6px 24px;
      background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
      border-radius: 4px;
      font-family: 'Caesar Dressing';
      color: ${({ theme }) => theme.colors.neural['900']};
    }
  }

  .yellow {
    background: linear-gradient(180deg, #ffd029 0%, #ff8616 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .small {
    font-size: 12px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;

  > div {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    color: ${({ theme }) => theme.colors.neural['50']};

    
    @media screen and (max-width: 768px) {
      font-size: 48px;
    }
  }

  > img {
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      max-height: unset;
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

export const RequireConnectWallet = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
`;
