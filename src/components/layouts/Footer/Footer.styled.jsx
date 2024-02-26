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
`

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
  background-color: ${({ theme }) => theme.colors.neural['1000']};
`;

export const FooterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1092px;
  padding: 96px 0;

  > div.right {
    display: flex;
    gap: 100px;
  }
`;
