import styled, { keyframes } from 'styled-components';

const iconJs = keyframes`
0% {
      transform: translate3d(6vw, 4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(10vw, 10vw, 0) rotate(360deg);
    }    
`;

const iconTs = keyframes`
0% {
      transform: translate3d(-6vw, 4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(-10vw, 10vw, 0) rotate(360deg);
    }    
`;

const iconCss = keyframes`
0% {
      transform: translate3d(6vw, -4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(10vw, -10vw, 0) rotate(360deg);
    }    
`;

const iconHtml = keyframes`
0% {
      transform: translate3d(-6vw, -4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(-10vw, -10vw, 0) rotate(360deg);
    }    
`;

const iconRjs = keyframes`

100% {
      transform: rotate(360deg);
    }    
`;

const iconGit = keyframes`
0% {
      transform: translate3d(0, 7.5vw, 0) rotate(0);
    }
100% {
      transform: translate3d(0, 12.5vw, 0) rotate(360deg);
    }    
`;

const iconGitHub = keyframes`
0% {
      transform: translate3d(0, -7.5vw, 0) rotate(0);
    }
100% {
      transform: translate3d(0, -12.5vw, 0) rotate(360deg);
    }    
`;

const iconJs_2 = keyframes`
0% {
      transform: translate3d(6vw, 4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(20vw, 20vw, 0) rotate(360deg);
    }    
`;

const iconTs_2 = keyframes`
0% {
      transform: translate3d(-6vw, 4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(-20vw, 20vw, 0) rotate(360deg);
    }    
`;

const iconCss_2 = keyframes`
0% {
      transform: translate3d(6vw, -4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(20vw, -20vw, 0) rotate(360deg);
    }    
`;

const iconHtml_2 = keyframes`
0% {
      transform: translate3d(-6vw, -4vw, 0) rotate(0);
    }
100% {
      transform: translate3d(-20vw, -20vw, 0) rotate(360deg);
    }    
`;

const iconGit_2 = keyframes`
0% {
      transform: translate3d(0, 7.5vw, 0) rotate(0);
    }
100% {
      transform: translate3d(0, 20vw, 0) rotate(360deg);
    }    
`;

const iconGitHub_2 = keyframes`
0% {
      transform: translate3d(0, -7.5vw, 0) rotate(0);
    }
100% {
      transform: translate3d(0, -20vw, 0) rotate(360deg);
    }    
`;

const displayVisible = keyframes`
0% {visibility: collapse}
100% {visibility: collapse}
`;

const opacityDiv = keyframes`
0% {opacity: 0}
100% {opacity: 0.5}
`;

const opacityDiv_2 = keyframes`
0% {opacity: 0}
100% {opacity: 0.25}
`;

export const StyledAnimation = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 63vw;
  opacity: 0.5;
  animation: ${iconRjs} 20s linear infinite, ${displayVisible} 6s normal,
    ${opacityDiv} 10s 6s normal;

  svg {
    position: absolute;
    width: 3.5vw;
    height: 3.5vw;
  }

  .svg-js {
    animation: ${iconJs} 3s linear infinite alternate;
    color: #f0db4f;
  }

  .svg-ts {
    animation: ${iconTs} 4s linear infinite alternate;
    color: #007acc;
  }

  .svg-rjs {
    width: 6vw;
    height: 6vw;
    animation: ${iconRjs} 10s linear infinite;
    color: #61dafb;
  }

  .svg-css {
    animation: ${iconCss} 3s linear infinite alternate;
    color: #2965f1;
  }

  .svg-html {
    animation: ${iconHtml} 4s linear infinite alternate;
    color: #ec6231;
  }

  .svg-git {
    width: 4.5vw;
    height: 4.5vw;
    animation: ${iconGit} 5s linear infinite alternate;
    color: #f1502f;
  }

  .svg-github {
    animation: ${iconGitHub} 3s linear infinite alternate;
  }

  @media (max-width: 850px) {
    margin-top: 50px;

    svg {
      position: absolute;
      width: 4.5vw;
      height: 4.5vw;
    }

    .svg-rjs {
      width: 8vw;
      height: 8vw;
    }

    .svg-git {
      width: 6.5vw;
      height: 6.5vw;
    }
  }

  @media (max-width: 550px) {
    left: 35vw;
    opacity: 0.25;
    z-index: -1;
    animation: ${iconRjs} 20s linear infinite, ${displayVisible} 6s normal,
      ${opacityDiv_2} 10s 6s normal;

    svg {
      position: absolute;
      width: 8.5vw;
      height: 8.5vw;
    }

    .svg-js {
      animation: ${iconJs_2} 3s linear infinite alternate;
    }

    .svg-ts {
      animation: ${iconTs_2} 4s linear infinite alternate;
    }

    .svg-css {
      animation: ${iconCss_2} 3s linear infinite alternate;
    }

    .svg-rjs {
      width: 13vw;
      height: 13vw;
    }

    .svg-html {
      animation: ${iconHtml_2} 4s linear infinite alternate;
    }

    .svg-git {
      width: 10.5vw;
      height: 10.5vw;
      animation: ${iconGit_2} 5s linear infinite alternate;
    }

    .svg-github {
      animation: ${iconGitHub_2} 3s linear infinite alternate;
    }
  }
`;
