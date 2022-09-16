import { FaUserAstronaut } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { BsFillGearFill } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { AiFillFolderOpen } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { StyledNav } from './styles';
import { useContext, useState } from 'react';
import { UserContext } from '../../context';

function NavBar() {
  const [effect, setEffect] = useState<string>('0');
  const { dispatch } = useContext(UserContext);

  return (
    <StyledNav>
      <ul className="nav-bar-list">
        <li
          id="0"
          className={effect === '0' ? 'current-effect' : 'null'}
          onClick={e => {
            setEffect((e.target as HTMLLIElement).id);
            dispatch('home');
          }}
        >
          <ImHome />
          <span>Início</span>
        </li>
        <li
          id="1"
          className={effect === '1' ? 'current-effect' : 'null'}
          onClick={e => {
            setEffect((e.target as HTMLLIElement).id);
            dispatch('about');
          }}
        >
          <FaUserAstronaut />
          <span>Sobre</span>
        </li>
        <li
          id="2"
          className={effect === '2' ? 'current-effect' : 'null'}
          onClick={e => setEffect((e.target as HTMLLIElement).id)}
        >
          <TbCertificate />
          <span>Formação</span>
        </li>
        <li
          id="3"
          className={effect === '3' ? 'current-effect' : 'null'}
          onClick={e => setEffect((e.target as HTMLLIElement).id)}
        >
          <BsFillGearFill />
          <span>Skills</span>
        </li>
        <li
          id="4"
          className={effect === '4' ? 'current-effect' : 'null'}
          onClick={e => setEffect((e.target as HTMLLIElement).id)}
        >
          <AiFillFolderOpen />
          <span>Portfólio</span>
        </li>
        <li
          id="5"
          className={effect === '5' ? 'current-effect' : 'null'}
          onClick={e => setEffect((e.target as HTMLLIElement).id)}
        >
          <MdEmail />
          <span>Contatos</span>
        </li>
      </ul>
    </StyledNav>
  );
}

export default NavBar;
