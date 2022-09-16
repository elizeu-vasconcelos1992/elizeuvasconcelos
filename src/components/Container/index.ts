import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  align-items: center;
  position: relative;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
