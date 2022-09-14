import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0 0 3rem;
      gap: 2vh;
      cursor: pointer;
      transition: 0.5s;

      svg {
        min-width: 1.8rem;
        min-height: 1.8rem;
        pointer-events: none;
      }

      span {
        font-size: 1.5vw;
        pointer-events: none;
      }
    }
  }

  .current-effect {
    background-color: var(--color-gray);

    span {
      color: var(--color-dark);
    }

    svg {
      color: var(--color-dark);
    }
  }

  @media (max-width: 1025px) {
    width: 100%;
    height: 100%;

    ul {
      li {
        padding: 0 0 0 1rem;

        span {
          font-size: calc(1.5vw + 2px);
        }
      }
    }
  }

  @media (max-width: 850px) {
    ul {
      flex-direction: row;

      li {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 10px;
        gap: 0.5vh;
        height: 3.5rem;
      }
    }
  }

  @media (max-width: 550px) {
    ul {
      li {
        span {
          font-size: calc(1.5vw + 4px);
        }
      }
    }
  }
`;
