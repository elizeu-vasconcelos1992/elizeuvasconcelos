import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useState,
} from 'react';
import About from '../Main/About';
import Contact from '../Main/Contact';
import Start from '../Main/Start';
import emailjs from '@emailjs/browser';
import Portfolio from '../Main/Portfolio';
import Resume from '../Main/Resume';

interface IUserProps {
  children: ReactNode;
}

interface IUserContext {
  Page: ReactNode;
  dispatch: Dispatch<string>;
  sendEmailJs: (data: Record<string, unknown>) => void;
  modal: string;
  setModal: Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext({} as IUserContext);

export default function UserProvider({ children }: IUserProps) {
  const [Page, dispatch] = useReducer(reducerPage, <Start />);
  const [modal, setModal] = useState<string>('null');

  function closeModal() {
    setTimeout(() => {
      setModal('null');
    }, 3000);
  }

  function sendEmailJs(data: Record<string, unknown>) {
    setModal('load');
    emailjs
      .send('gmailMessageElizeu', 'template_vnfnood', data, 'twwxxoERsap8Ecisf')
      .then(res => {
        setModal('success');
        closeModal();
      })
      .catch(err => {
        setModal('error');
        closeModal();
      });
  }

  function reducerPage(state: ReactNode, action: string) {
    switch (action) {
      case 'home':
        return <Start />;

      case 'about':
        return <About />;

      case 'contact':
        return <Contact />;

      case 'portfolio':
        return <Portfolio />;

      case 'resume':
        return <Resume />;

      default:
        <Start />;
    }
  }

  return (
    <UserContext.Provider
      value={{ Page, dispatch, sendEmailJs, modal, setModal }}
    >
      {' '}
      {children}
    </UserContext.Provider>
  );
}
