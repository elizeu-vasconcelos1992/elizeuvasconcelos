import styled from 'styled-components';

export const StyledPortfolio = styled.div`
  width: 100%;
  max-height: 560px;
  padding: 3rem 0;
  display: flex;
  overflow-y: scroll;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 850px) {
    max-height: 100%;
    overflow-y: auto;
  }
`;
