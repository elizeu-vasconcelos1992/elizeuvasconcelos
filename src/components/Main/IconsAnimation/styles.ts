import styled, { keyframes } from 'styled-components';

const iconJs = keyframes`
0% {
      transform: translate3d(75px, 50px, 0) rotate(0);
    }
100% {
      transform: translate3d(200px, 125px, 0) rotate(360deg);
    }    
`;

const iconTs = keyframes`
0% {
      transform: translate3d(-75px, 50px, 0) rotate(0);
    }
100% {
      transform: translate3d(-200px, 125px, 0) rotate(360deg);
    }    
`;

const iconCss = keyframes`
0% {
      transform: translate3d(75px, -50px, 0) rotate(0);
    }
100% {
      transform: translate3d(200px, -125px, 0) rotate(360deg);
    }    
`;

const iconHtml = keyframes`
0% {
      transform: translate3d(-75px, -50px, 0) rotate(0);
    }
100% {
      transform: translate3d(-200px, -125px, 0) rotate(360deg);
    }    
`;

const iconRjs = keyframes`

100% {
      transform: rotate(360deg);
    }    
`;

const iconGit = keyframes`
0% {
      transform: translate3d(0, 90px, 0) rotate(0);
    }
100% {
      transform: translate3d(0, 150px, 0) rotate(360deg);
    }    
`;

const iconGitHub = keyframes`
0% {
      transform: translate3d(0, -90px, 0) rotate(0);
    }
100% {
      transform: translate3d(0, -150px, 0) rotate(360deg);
    }    
`;

const displayVisible = keyframes`
0% {visibility: collapse}
100% {visibility: collapse}
`;

const opacityDiv = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

export const StyledAnimation = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${iconRjs} 20s linear infinite, ${displayVisible} 6s normal,
    ${opacityDiv} 10s 6s normal;

  svg {
    position: absolute;
    width: 50px;
    height: 50px;
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
    width: 90px;
    height: 90px;
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
    width: 65px;
    height: 65px;
    animation: ${iconGit} 5s linear infinite alternate;
    color: #f1502f;
  }

  .svg-github {
    animation: ${iconGitHub} 3s linear infinite alternate;
  }
`;
