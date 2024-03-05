import { styled } from 'styled-components';

export const FooterCommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 24px;
    font-family: 'Caesar Dressing';
    font-size: 24px;
    line-height: 24px;

    > a {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.neural['0']};
    }
  }
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: 'Caesar Dressing';
    font-size: 32px;
    line-height: 24px;

    > a {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.neural['0']};
    }
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > a {
    img {
      height: 56px;
    }
  }

  > div {
    font-family: 'Caesar Dressing';
  }

  > span {
    font-family: 'Be Vietnam Pro';
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.dark ? 'linear-gradient(180deg, #0D0D0D 0%, rgba(13, 13, 13, 0.67) 100%)' : 'transparent'};
`;

export const FooterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1092px;
  padding: 96px 0;

  @media screen and (max-width: 1280px) {
    padding: 96px 100px;
    max-width: unset;
  }

  @media screen and (max-width: 1024px) {
    padding: 46px 24px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    max-width: 100vw;
    overflow-x: hidden;

    > div.right {
      justify-content: space-between;
      width: 100%;
      gap: 12px !important;
    }
  }

  > div.right {
    display: flex;
    gap: 100px;
  }
`;
