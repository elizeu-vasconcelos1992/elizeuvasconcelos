import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { StyledAnimation } from './styles';

function IconsAnimation() {
  return (
    <StyledAnimation className="div-animation">
      <SiJavascript className="svg-js" size={50} />
      <SiTypescript className="svg-ts" size={50} />
      <SiReact className="svg-rjs" size={70} />
      <SiCss3 className="svg-css" size={50} />
      <SiHtml5 className="svg-html" size={50} />
      <SiGit className="svg-git" size={50} />
      <SiGithub className="svg-github" size={50} />
    </StyledAnimation>
  );
}

export default IconsAnimation;
