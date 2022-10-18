import { Container } from './styles';
import { FaGrinWink } from 'react-icons/fa';

function ModalSucess() {
  return (
    <Container>
      <div>
        <FaGrinWink />
        <h3>Messagem enviada</h3>
      </div>
    </Container>
  );
}

export default ModalSucess;
