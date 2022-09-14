import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  position: relative;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
