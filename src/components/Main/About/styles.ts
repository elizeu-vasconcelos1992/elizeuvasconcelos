import styled from 'styled-components';

export const StyledAbout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse;

  .about-img {
    min-width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25vw;
      border-radius: 15px;
    }
  }

  .about-spacer {
    width: 1px;
    height: 85vh;
    border: 1px solid var(--color-gray);
    background-color: var(--color-gray);
  }

  .about-text {
    width: 65%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    h1 {
      color: var(--color-gray);
      font-size: 3vw;
    }

    p {
      text-align: justify;
      padding: 0 1rem 0 1rem;
      font-size: 1.3vw;
    }
  }

  @media (max-width: 850px) {
    .about-text {
      p {
        font-size: calc(1.3vw + 2.5px);
      }
    }
  }

  @media (max-width: 550px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    margin: 1rem 0 1rem 0;
    gap: 2rem;

    .about-text {
      height: fit-content;
      width: 90%;

      h1 {
        font-size: 5vw;
      }

      p {
        font-size: calc(1.3vw + 7.5px);
      }
    }

    .about-spacer {
      width: 80vw;
      height: 1px;
    }

    .about-img {
      min-width: 33%;

      img {
        width: 50vw;
        border-radius: 15px;
      }
    }
  }
`;
