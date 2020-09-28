import React, { useCallback, useEffect } from 'react';
import styles from './App.module.scss';
import Login from './components/Login/Login';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ChatRoom from './components/ChatRoom/ChatRoom';
import { useDispatch, useSelector } from 'react-redux';
import { userExists } from './store/reducers/selectors';
import { getUserFromLocalStorage } from './store/actions/auth';

const App: React.FC = () => {

  const isAuthenticated = useSelector(userExists);

  const dispatch = useDispatch();

  const tryAutomaticSignin = useCallback(() => dispatch(getUserFromLocalStorage()), [dispatch]);

  useEffect(() => {
    tryAutomaticSignin();
  }, [tryAutomaticSignin])

  return (
    <div className={styles.App}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isAuthenticated ? "ChatRoom" : "Login"}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames={{
            enter: styles.FadeEnter,
            enterActive: styles.FadeEnterActive,
            exit: styles.FadeExit,
            exitActive: styles.FadeExitActive
          }}>
          {isAuthenticated ? <ChatRoom /> : <Login />}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
