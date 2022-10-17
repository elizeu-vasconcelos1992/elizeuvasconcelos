import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid var(--color-gray);

  @media (max-width: 850px) {
    width: 100vw;
    height: 15%;
    border: none;
    padding: 0rem 1rem 0 1rem;
    flex-direction: row;

    div {
      display: none;

      img {
        display: none;
      }
    }
  }
`;
