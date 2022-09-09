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
      height: 4rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0 0 3rem;
      gap: 1rem;
      cursor: pointer;
      transition: 0.5s;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }

      span {
        font-size: 1.3rem;
      }
    }
  }
`;
