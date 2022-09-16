import BackgroundAnimation from './components/Container/Background';
import { Container } from './components/Container';
import UserProvider from './components/context';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Container>
          <BackgroundAnimation />
          <Header />
          <Main />
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
