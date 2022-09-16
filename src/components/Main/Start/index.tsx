import FrontEnd from './FrontEndText';
import IconsAnimation from './IconsAnimation';
import { StyledStart } from './styles';

function Start() {
  return (
    <StyledStart>
      <div className="div-start">
        <div className="div-start-container">
          <p>D E V</p>D E V<p>D E V</p>
        </div>
        <div className="div-start-container-2">
          <span className="span-1">lizeu</span>
          <span className="span-2">asconcelos</span>
          <FrontEnd />
        </div>
      </div>
      <IconsAnimation />
    </StyledStart>
  );
}

export default Start;
