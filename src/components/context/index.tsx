import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import About from '../Main/About';
import Start from '../Main/Start';

interface IUserProps {
  children: ReactNode;
}

interface IUserContext {
  Page: ReactNode;
  dispatch: Dispatch<string>;
}

export const UserContext = createContext({} as IUserContext);

export default function UserProvider({ children }: IUserProps) {
  const [Page, dispatch] = useReducer(reducerPage, <Start />);

  function reducerPage(state: ReactNode, action: string) {
    switch (action) {
      case 'home':
        return <Start />;
      case 'about':
        return <About />;

      default:
        <Start />;
    }
  }
  console.log(Page);
  return (
    <UserContext.Provider value={{ Page, dispatch }}>
      {' '}
      {children}
    </UserContext.Provider>
  );
}
