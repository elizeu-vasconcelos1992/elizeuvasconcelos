import styled from 'styled-components';

export const StyledContactForm = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 70%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.25);
    color: var(--color-gray);
    padding: 1rem;
    gap: 1.5rem;

    h2 {
      font-size: calc(1vw + 10px);
      color: rgba(255, 255, 255, 0.9);
      margin: 0 auto;
      letter-spacing: 2px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: calc(1vw + 4px);
      gap: 0.4rem;
      color: rgba(255, 255, 255, 0.8);
      letter-spacing: 1px;

      input {
        font-size: calc(1vw + 2px);
        background-color: transparent;
        border: 1px solid transparent;
        outline: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        color: var(--color-gray);
        letter-spacing: 1px;
      }

      span {
        font-size: calc(1vw + 0.75px);
        line-height: 14px;
        color: #e9967a;
      }
    }

    textarea {
      height: 5rem;
      font-size: calc(1vw + 2px);
      border: 1px solid transparent;
      outline: none;
      overflow: hidden;
      resize: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      color: var(--color-gray);
      letter-spacing: 1px;
    }

    button {
      width: 80%;
      font-size: calc(1vw + 4px);
      letter-spacing: 1px;
      height: calc(1vw + 2rem);
      border-radius: 50px;
      margin: 0 auto;
      color: rgba(255, 255, 255, 0.85);
      border: 1px solid transparent;
      background-color: #191970;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        filter: drop-shadow(0px 0px 5px var(--color-gray));
      }
    }
  }

  @media (max-width: 850px) {
    form {
      width: 85%;

      h2 {
        font-size: calc(1vw + 12px);
      }

      label {
        font-size: calc(1vw + 8px);

        input {
          font-size: calc(1vw + 6px);
        }

        span {
          font-size: calc(1vw + 3px);
        }

        textarea {
          font-size: calc(1vw + 6px);
        }
      }

      button {
        font-size: calc(1vw + 8px);
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    form {
      width: 85%;

      h2 {
        font-size: calc(1vw + 15px);
      }

      label {
        font-size: calc(1vw + 11px);

        input {
          font-size: calc(1vw + 9px);
        }

        span {
          font-size: calc(1vw + 6px);
        }

        textarea {
          font-size: calc(1vw + 9px);
        }
      }

      button {
        font-size: calc(1vw + 11px);
      }
    }
  }
`;
