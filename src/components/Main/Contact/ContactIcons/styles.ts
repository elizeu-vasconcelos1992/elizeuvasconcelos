import styled from 'styled-components';

export const StyledContactIcons = styled.div`
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  a {
    width: calc(2.2vw + 15px);
    height: calc(2.2vw + 15px);
  }

  svg {
    width: calc(2.2vw + 15px);
    height: calc(2.2vw + 15px);
    border: 1px solid transparent;
    transition: 0.5s;
    cursor: pointer;

    :hover {
      transform: scale(1.4);
    }
  }

  .whatsapp {
    color: #25d366;
  }

  .linkedin {
    color: #0077b5;
  }

  .twitter {
    color: #1da1f2;
  }

  @media (max-width: 600px) {
    a {
      width: calc(2.2vw + 20px);
      height: calc(2.2vw + 20px);
    }

    svg {
      width: calc(2.2vw + 20px);
      height: calc(2.2vw + 20px);
    }
  }
`;
