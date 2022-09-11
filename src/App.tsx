import { Container } from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App;
