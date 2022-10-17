import styled from 'styled-components';

export const StyledContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .bar {
    width: 2px;
    height: 80vh;
    background-color: var(--color-gray);
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    padding: 2rem 0 2rem 0;
    gap: 2rem;

    .bar {
      width: 60vw;
      height: 1px;
    }
  }
`;
