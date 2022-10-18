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
      height: 6rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0 0 4rem;
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

    a {
      width: 100%;
      height: 6rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0 0 4rem;
      gap: 2vh;
      cursor: pointer;
      transition: 0.5s;
      text-decoration: none;

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
    padding: 0.5rem 0 0.5rem 0;

    ul {
      li {
        padding: 0 0 0 1.75rem;

        span {
          font-size: calc(1.5vw + 3px);
        }
      }

      a {
        padding: 0 0 0 1.75rem;

        span {
          font-size: calc(1.5vw + 3px);
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

      a {
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

      a {
        span {
          font-size: calc(1.5vw + 4px);
        }
      }
    }
  }
`;
