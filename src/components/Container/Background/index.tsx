import { BackDiv } from './styles';

interface IPropos {
  children?: React.ReactNode;
}

function BackgroundAnimation(propos: IPropos) {
  return (
    <BackDiv>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </BackDiv>
  );
}

export default BackgroundAnimation;
