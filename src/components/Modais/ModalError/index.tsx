import { Container } from './styles';
import { HiEmojiSad } from 'react-icons/hi';

function ModalError() {
  return (
    <Container>
      <div>
        <HiEmojiSad />
        <h3>Messagem não enviada</h3>
      </div>
    </Container>
  );
}

export default ModalError;
