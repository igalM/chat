import React from 'react';
import styles from './App.module.scss';
import Login from './components/Login/Login';
import { CSSTransition } from 'react-transition-group';
import ChatRoom from './components/ChatRoom/ChatRoom';
import { useSelector } from 'react-redux';
import { userExists } from './store/reducers/selectors';

const App: React.FC = () => {

  const isAuthenticated = useSelector(userExists);

  return (
    <div className={styles.App}>
      {!isAuthenticated && <Login />}
      <CSSTransition
        in={isAuthenticated}
        timeout={300}
        unmountOnExit
        classNames={{
          enterActive: styles.InputEntering,
          enterDone: styles.InputEntered,
          exitActive: styles.InputClosing
        }}>
        <ChatRoom />
      </CSSTransition>
    </div>
  );
}

export default App;
