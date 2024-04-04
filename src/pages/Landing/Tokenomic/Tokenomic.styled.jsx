import { styled } from 'styled-components';

export const Reminder = styled.div`
  font-size: 96px;
  line-height: 64px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['50']};
`;

export const Chart = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 999px;

  @media screen and (max-width: 463px) {
    width: 360px;
    height: 360px;
  }

  > div {
    width: 100%;
    height: 100%;
    background-color: 800;
    border-radius: 999px;
    border: 12px solid ${({ theme }) => theme.colors.neural['900']};

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 100%;
      border-radius: 999px;
      padding: 36px;
      background-color: ${({ theme }) => theme.colors.neural['800']};
    }
  }
`;

export const ChartInfo = styled.div`
  background-color: #efefef;
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > div {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    display: flex;
    align-items: center;
    gap: 8px;

    color: #0a071e;

    > div {
      width: 16px;
      height: 16px;
      border: 2px solid ${({ theme }) => theme.colors.neural['800']};
      border-radius: 4px;

      &.solid {
        background-color: ${props => props.solidColor ? props.solidColor : '#333333'};
      }
    }

    > span {
      font-family: 'Open Sans';
      font-weight: 800;
      font-size: 20.25px;
      line-height: 27px;
      color: #0a071e;
    }
  }
`;

export const ChartInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 32px;

  @media screen and (max-width: 914px) {
    display: none;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  .chart-info-mobile {
    display: none;
  }

  > div.mobile {
    display: none;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 32px;

    > ${ChartInfo} {
      display: none;
    }
  }

  @media screen and (max-width: 914px) {
    flex-direction: column;

    > div.mobile {
      display: grid;
    }

    .chart-info-mobile {
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        width: 50%;
      }
    }

    > ${ChartInfo} {
      display: none;
    }

    > div > {
      ${ChartInfo} {
        display: flex !important;
      }
    }
  }

  @media screen and (max-width: 463px) {
    > div.mobile {
      gap: 12px;
      width: 100%;

      > ${ChartInfo} {
        display: flex !important;
        flex: 1;
        width: 100%;
      }
    }
  }
`;

export const TokenomicTitle = styled.div`
  font-size: 48px;
  line-height: 38px;
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.colors.neural['50']};
`;

export const TokenomicSubTitle = styled.div`
  font-family: 'Caesar Dressing';
  text-align: center;
  color: #f6f6f6;
`;

export const TokenomicContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    padding: 0 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
