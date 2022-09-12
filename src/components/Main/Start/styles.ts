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
  width: 98%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  margin-bottom: 80px;

  .div-start {
    width: 50%;
    display: flex;

    .div-start-container {
      width: 70px;
      display: flex;
      flex-direction: column;
      position: relative;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
        0.025em 0.04em 0 #fffc00;
      animation: ${glitch} 725ms infinite, ${entry} 3s normal both;

      p {
        font-weight: bold;
        text-align: center;
        line-height: 100px;
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
      width: 500px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;

      span {
        line-height: 100px;
        letter-spacing: 6px;
        overflow: hidden;
      }

      .span-1 {
        font-size: 5rem;
        font-weight: 700;
        max-width: 215px;
        text-shadow: 4px 2px 5px rgba(150, 150, 150, 0.75);
        animation: ${typing} 1s steps(120) 3s normal,
          ${displayvisible} 3s normal;
      }

      .span-2 {
        font-size: 5rem;
        font-weight: 700;
        max-width: 550px;
        width: 550px;
        text-shadow: 4px 2px 5px rgba(150, 150, 150, 0.75);
        animation: ${typing2} 2s steps(120) 4s normal,
          ${displayvisible} 4s normal;
      }
    }
  }
`;
