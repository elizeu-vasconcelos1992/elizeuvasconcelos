import { Container } from './components/Container';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
