import { styled } from 'styled-components';

export const ComingSoonContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  gap: 32px;
  margin-top: 120px;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    padding: 0 24px;
  }

  > img {
    width: 100%;
  }

  > span {
    font-size: 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;