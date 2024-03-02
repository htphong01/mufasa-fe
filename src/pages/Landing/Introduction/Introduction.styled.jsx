import { styled } from 'styled-components';

export const IntroductionContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: flex;
  max-width: 1092px;
  padding: 96px 0;
  gap: 56px;

  @media screen and (max-width: 1360px) {
    padding: 96px 100px;
    max-width: 1280px;
  }

  @media screen and (max-width: 1210px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 96px 24px;
  }

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: fit-content;

    @media screen and (max-width: 1210px) {
      width: 100%;
    }

    > p {
      font-size: 96px;
      line-height: 64px;
      color: ${({ theme }) => theme.colors.neural['50']};
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      @media screen and (max-width: 1210px) {
        display: none;
        text-align: center;
      }

      &.mobile {
        display: none;

        @media screen and (max-width: 1210px) {
          display: block !important;
        }
      }
    }

    > span {
      font-family: 'Caesar Dressing';
      color: #f6f6f6;

      @media screen and (max-width: 1210px) {
        text-align: justify;
      }
    }

    &:last-child {
      align-items: center;
      justify-content: center;
      position: relative;

      > div {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 530px) {
          > img {
            width: 80%;
          }

          .image {
            > img {
              width: 80%;
            }
          }
        }

        @media screen and (max-width: 438px) {
          > img {
            width: 80%;
          }

          .image {
            > img {
              width: 70%;
            }
          }
        }
      }
      }

      

      .image {
        position: absolute;
        width: fit-content;
        display: flex;
        justify-content: flex-end;

        &.image2 {
          right: 0px;
          top: 24px;
        }

        &.image3 {
          right: 0px;
          bottom: -48px;
        }

        &.image4 {
          left: 0px;
          bottom: -48px;
          justify-content: flex-start;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;
