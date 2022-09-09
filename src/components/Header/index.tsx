import NavBar from '../NavBar';
import { StyledHeader } from './styles';

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src="//joeschmoe.io/api/v1/jon" alt="" />
      </div>
      <NavBar />
    </StyledHeader>
  );
}

export default Header;
