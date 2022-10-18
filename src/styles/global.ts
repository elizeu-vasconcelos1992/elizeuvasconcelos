import { createGlobalStyle } from 'styled-components';

interface IGobalStyle {
  mode?: boolean;
}

export const GlobalStyle = createGlobalStyle<IGobalStyle>`
  :root {
    --color-dark: #000;
    --color-gray: #eee9e9;
  } 
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Prompt", sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  .nav-bar-list li:hover {
    background-color: var(--color-gray);
  }

  .nav-bar-list li:hover span {
    color: var(--color-dark);
  }

  .nav-bar-list li:hover svg {
    color: var(--color-dark);
  }

  .nav-bar-list a:hover {
    background-color: var(--color-gray);
  }

  .nav-bar-list a:hover span {
    color: var(--color-dark);
  }

  .nav-bar-list a:hover svg {
    color: var(--color-dark);
  }

  p, span, svg {
    color: var(--color-gray);
  }

  body {
    background: var(--color-dark);
  };
`;
