/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { StyledFront, StyledSpan } from './styles';

function FrontEnd() {
  useEffect(() => {
    const text = document.getElementById('text') as HTMLSpanElement;
    let idx = 1;
    let prog = 'REACT';

    function writeText() {
      text.innerText = prog.slice(0, idx);

      idx++;

      if (idx > prog.length) {
        idx = 1;

        if (prog === 'REACT') {
          return (prog = 'HOOKS');
        }
        if (prog === 'HOOKS') {
          return (prog = 'CONTEXT');
        }
        if (prog === 'CONTEXT') {
          return (prog = 'JAVASCRIPT');
        }
        if (prog === 'JAVASCRIPT') {
          return (prog = 'HTML5');
        }
        if (prog === 'HTML5') {
          return (prog = 'CSS3');
        }
        if (prog === 'CSS3') {
          return (prog = 'TYPESCRIPT');
        }
        if (prog === 'TYPESCRIPT') {
          return (prog = 'GITFLOW');
        }
        if (prog === 'GITFLOW') {
          return (prog = 'SCRUM');
        }
        if (prog === 'SCRUM') {
          return (prog = 'REACT');
        }
      }
    }

    setInterval(writeText, 500);
  }, []);

  return (
    <>
      {' '}
      <StyledSpan id="text"></StyledSpan>
      <StyledFront>FRONT-END</StyledFront>
    </>
  );
}

export default FrontEnd;
