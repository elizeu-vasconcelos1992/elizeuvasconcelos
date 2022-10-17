import styled, { keyframes } from 'styled-components';

const typing = keyframes`
0% { width: 0px}
100% {width: 215px}
`;

const typing2 = keyframes`
0% { width: 0px}
100% {width: 550px}
`;

const displayvisible = keyframes`
0% {visibility: collapse}
100% {visibility: collapse}
`;

const entry = keyframes`
0% {margin-top: -600px}
100% {margin-top: 0px}
`;

const glitch = keyframes`
0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
`;

export const StyledStart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  gap: 5rem;

  .div-start {
    width: 50%;
    display: flex;
    position: absolute;
    left: 25vw;

    .div-start-container {
      width: min-content;
      display: flex;
      font-size: 7vw;
      flex-direction: column;
      position: relative;
      font-weight: bold;
      text-align: center;
      line-height: 7.5vw;
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
        0.025em 0.04em 0 #fffc00;
      animation: ${glitch} 725ms infinite, ${entry} 3s normal both;

      p {
        font-weight: bold;
        text-align: center;
        line-height: 7.5vw;
        position: absolute;
        top: 0;
        left: 0;

        :first-child {
          animation: ${glitch} 500ms infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          transform: translate(-0.04em, -0.03em);
          opacity: 0.75;
        }

        :last-child {
          animation: ${glitch} 375ms infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          transform: translate(0.04em, 0.03em);
          opacity: 0.75;
        }
      }
    }

    .div-start-container-2 {
      width: inherit;
      height: 22.8vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;

      span {
        line-height: 7.5vw;
        letter-spacing: 6px;
        overflow: hidden;
      }

      .span-1 {
        font-size: 7vw;
        font-weight: 700;
        width: max-content;
        text-shadow: 4px 2px 5px rgba(150, 150, 150, 0.75);
        animation: ${typing} 1s steps(120) 3s normal,
          ${displayvisible} 3s normal;
      }

      .span-2 {
        font-size: 7vw;
        font-weight: 700;
        width: max-content;
        text-shadow: 4px 2px 5px rgba(150, 150, 150, 0.75);
        animation: ${typing2} 2s steps(120) 4s normal,
          ${displayvisible} 4s normal;
      }
    }
  }

  @media (max-width: 850px) {
    .div-start {
      left: 6vw;

      .div-start-container {
        font-size: 8vw;
        line-height: 9vw;

        p {
          line-height: 9vw;
        }
      }

      .div-start-container-2 {
        height: 27.3vw;

        span {
          line-height: 9vw;
        }

        .span-1 {
          font-size: 8vw;
        }

        .span-2 {
          font-size: 8vw;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .div-start {
      .div-start-container {
        font-size: 12vw;
        line-height: 13vw;

        p {
          line-height: 13vw;
        }
      }

      .div-start-container-2 {
        height: 39.5vw;

        span {
          line-height: 13vw;
        }

        .span-1 {
          font-size: 12vw;
        }

        .span-2 {
          font-size: 12vw;
        }
      }
    }
  }
`;
