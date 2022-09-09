import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-dark: #000;
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
    background-color: white;
  }

  .nav-bar-list li:hover span {
    color: black
  }

  .nav-bar-list li:hover svg {
    color: black
  }

  p, span, svg {
    color: white;
  }

  body {
    background: var(--color-dark);
  };
`;
