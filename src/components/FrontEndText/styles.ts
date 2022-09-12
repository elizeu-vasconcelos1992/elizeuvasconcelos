import styled, { keyframes } from 'styled-components';

const entry = keyframes`
0% {margin-bottom: -300px}
100% {margin-bottom: 0}
`;

export const StyledSpan = styled.span`
  font-family: 'Titan One', sans-serif;
  position: absolute;
  min-width: 650px;
  font-size: 6rem;
  bottom: -100px;
  left: -50px;
  animation: ${entry} 3s normal both;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    hsl(49deg 100% 69%) 0%,
    hsl(309deg 100% 33%) 33%,
    hsl(234deg 93% 22%) 67%,
    hsl(183deg 79% 36%) 100%
  );
`;
