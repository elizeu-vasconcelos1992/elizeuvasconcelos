import styled, { keyframes } from 'styled-components';

const entry = keyframes`
0% {margin-bottom: -300px}
100% {margin-bottom: 0}
`;

const displayVisibleText = keyframes`
0% {visibility: collapse}
100% {visibility: collapse}
`;

const visibleText = keyframes`
0% {visibility: visible}
100% {visibility: visible}
`;

const opacityText = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

export const StyledSpan = styled.span`
  font-family: 'Titan One', sans-serif;
  position: absolute;
  width: max-content;
  height: max-content;
  font-size: 7vw;
  bottom: -7.5vw;
  left: -5vw;
  visibility: collapse;
  animation: ${displayVisibleText} 6s normal, ${opacityText} 6s 6s normal,
    ${visibleText} 6s 6s infinite normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    hsl(49deg 100% 69%) 0%,
    hsl(309deg 100% 33%) 33%,
    hsl(234deg 93% 22%) 67%,
    hsl(183deg 79% 36%) 100%
  );

  @media (max-width: 850px) {
    font-size: 8vw;
    bottom: -8.5vw;
  }

  @media (max-width: 550px) {
    font-size: 12vw;
    bottom: -12.5vw;
    left: -8vw;
  }
`;

export const StyledFront = styled.span`
  font-family: 'Titan One', sans-serif;
  position: absolute;
  width: max-content;
  height: max-content;
  font-size: 7vw;
  bottom: -7.5vw;
  left: -5vw;
  animation: ${entry} 3s normal both,
    ${displayVisibleText} 6s 6s infinite normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    hsl(49deg 100% 69%) 0%,
    hsl(309deg 100% 33%) 33%,
    hsl(234deg 93% 22%) 67%,
    hsl(183deg 79% 36%) 100%
  );

  @media (max-width: 850px) {
    font-size: 8vw;
    bottom: -8.5vw;
  }

  @media (max-width: 550px) {
    font-size: 12vw;
    bottom: -12.5vw;
    left: -8vw;
  }
`;
