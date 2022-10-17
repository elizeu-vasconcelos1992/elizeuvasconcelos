import styled from 'styled-components';

export const StyledResume = styled.div`
  width: 100%;
  max-height: 560px;
  overflow-y: scroll;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    width: 80%;
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.85);
    border: 1px solid transparent;
    background-color: #104e8b;

    cursor: pointer;
    transition: 0.5s;

    :hover {
      filter: drop-shadow(0px 0px 5px var(--color-gray));
    }
  }

  h3 {
    font-weight: 500;
  }

  h4 {
    font-weight: 600;
  }

  strong {
    font-weight: 600;
  }

  .resume {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 2%;
  }

  .objective,
  .formation {
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    padding: 1rem 0 1rem 0;
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .container {
      display: flex;
      justify-content: space-between;
    }
  }

  .hard-skills,
  .soft-skills,
  .softwares {
    width: 100px;
    text-align: center;
  }

  .formation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .experiences {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 850px) {
    a {
      width: 90%;
      font-size: calc(1vw + 10px);
    }

    .resume {
      width: 90%;
      font-size: calc(1vw + 8px);
    }
  }

  @media (max-width: 425px) {
    .formation {
      text-align: justify;
    }

    .experiences {
      text-align: justify;
    }
  }
`;
