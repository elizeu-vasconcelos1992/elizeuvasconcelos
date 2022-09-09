import { FaUserAstronaut } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { BsFillGearFill } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { AiFillFolderOpen } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { StyledNav } from './styles';

function NavBar() {
  return (
    <StyledNav>
      <ul className="nav-bar-list">
        <li onClick={() => console.log('teste')}>
          <ImHome />
          <span>Início</span>
        </li>
        <li>
          <FaUserAstronaut />
          <span>Sobre Mim</span>
        </li>
        <li>
          <TbCertificate />
          <span>Formação</span>
        </li>
        <li>
          <BsFillGearFill />
          <span>Competências</span>
        </li>
        <li>
          <AiFillFolderOpen />
          <span>Portfólio</span>
        </li>
        <li>
          <MdEmail />
          <span>Contatos</span>
        </li>
      </ul>
    </StyledNav>
  );
}

export default NavBar;
