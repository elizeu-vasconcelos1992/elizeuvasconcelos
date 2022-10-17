import styled from 'styled-components';

export const StyledCardPortfolio = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  perspective: 700px;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: absolute;
    border-radius: 10px;
    transition: 1s;

    h3 {
      text-align: center;
      color: white;
    }
  }

  .front-card {
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.5);

    img {
      width: 100%;
      height: 60%;
      border-radius: 8px;
    }

    span {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  .back-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    background-color: #104e8b;

    p {
      font-size: calc(1vw + 2.5px);
      text-align: justify;
      line-height: 20px;
    }

    .back-card-links {
      width: 100%;
      height: 10%;
    }

    span {
      width: 100%;
      min-height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        transition: 0.5s;

        :hover {
          box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.5);
        }
      }

      .link-app {
        color: white;
        text-decoration: none;
        font-size: calc(1vw + 2.5px);
        background-color: #191970;
      }

      .link-github {
        background-color: black;
      }
    }
  }

  :hover .front-card {
    transform: rotateY(180deg);
    z-index: 0;
  }

  :hover .back-card {
    transform: rotateY(0);
    z-index: 1;
  }

  @media (max-width: 850px) {
    .back-card {
      p {
        font-size: calc(1vw + 7px);
      }

      span {
        .link-app {
          font-size: calc(1vw + 5px);
        }
      }
    }
  }

  @media (max-width: 551px) {
    .back-card {
      p {
        font-size: calc(1vw + 9px);
      }

      span {
        .link-app {
          font-size: calc(1vw + 7px);
        }
      }
    }
  }

  @media (max-width: 376px) {
    .back-card {
      p {
        font-size: calc(1vw + 10px);
      }

      span {
        .link-app {
          font-size: calc(1vw + 7px);
        }
      }
    }
  }
`;
