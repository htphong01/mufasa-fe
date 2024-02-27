import { styled } from 'styled-components';

export const IntroductionContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: flex;
  max-width: 1092px;
  padding: 96px 0;
  gap: 56px;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: fit-content;

    > p {
      font-size: 96px;
      line-height: 64px;
      color: ${({ theme }) => theme.colors.neural['50']};
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
    }

    > span {
      font-family: 'Caesar Dressing';
      color: #f6f6f6;
    }

    &:last-child {
      align-items: center;
      justify-content: center;
      position: relative;

      .image {
        position: absolute;

        &.image2 {
          right: 0;
          top: 24px;
        }

        &.image3 {
          right: 0;
          bottom: -48px;
        }

        &.image4 {
          left: 0;
          bottom: -48px;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;
