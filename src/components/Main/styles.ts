import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 100vw;
    min-height: 85vh;
    height: 85%;
  }
`;
