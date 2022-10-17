import { useContext } from 'react';
import { UserContext } from '../context';
import { StyledMain } from './styles';

function Main() {
  const { Page } = useContext(UserContext);

  return <StyledMain>{Page}</StyledMain>;
}

export default Main;
