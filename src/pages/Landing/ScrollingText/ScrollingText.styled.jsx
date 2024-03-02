import { styled, keyframes } from 'styled-components';

const slideRightToLeft = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  .item {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    width: 100%;
    padding: 20px 0;
  }

  .item span {
    display: inline-block;
    padding-left: 100%;
    animation: ${slideRightToLeft} 12s linear infinite;
    font-family: 'Caesar Dressing';

    @media screen and (max-width: 928px) {
      animation-delay: 12s;
    }

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .item2 span {
    animation-delay: 4s;

    @media screen and (max-width: 928px) {
      animation-delay: 0s;
    }

    @media screen and (max-width: 430px) {
      animation-delay: 2s;
      display: inline-block;
    }
  }

  .item3 span {
    animation-delay: 8s;

    @media screen and (max-width: 928px) {
      animation-delay: 6s;
    }

    @media screen and (max-width: 430px) {
      animation-delay: 6s;
    }
  }
`;
