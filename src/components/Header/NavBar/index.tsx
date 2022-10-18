import { FaUserAstronaut } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { TbCertificate } from 'react-icons/tb';
import { MdDownload } from 'react-icons/md';
import { AiFillFolderOpen } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { StyledNav } from './styles';
import { useContext, useState } from 'react';
import { UserContext } from '../../context';
import curriculo from '../../../docs/curriculo.pdf';

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
          onClick={e => {
            setEffect((e.target as HTMLLIElement).id);
            dispatch('resume');
          }}
        >
          <TbCertificate />
          <span>Currículo</span>
        </li>
        <li
          id="3"
          className={effect === '3' ? 'current-effect' : 'null'}
          onClick={e => {
            setEffect((e.target as HTMLLIElement).id);
            dispatch('portfolio');
          }}
        >
          <AiFillFolderOpen />
          <span>Portfólio</span>
        </li>
        <li
          id="4"
          className={effect === '4' ? 'current-effect' : 'null'}
          onClick={e => {
            setEffect((e.target as HTMLLIElement).id);
            dispatch('contact');
          }}
        >
          <MdEmail />
          <span>Contatos</span>
        </li>
        <a
          href={curriculo}
          download
          id="5"
          className={effect === '5' ? 'current-effect' : 'null'}
          onClick={e => {
            setEffect((e.target as HTMLLIElement).id);
          }}
        >
          <MdDownload />
          <span>Baixar CV</span>
        </a>
      </ul>
    </StyledNav>
  );
}

export default NavBar;
