import React, { useCallback, useEffect } from 'react';
import styles from './App.module.scss';
import Login from './components/Login/Login';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ChatRoom from './components/ChatRoom/ChatRoom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignInError, userExists } from './store/reducers/selectors';
import { getUserFromLocalStorage } from './store/actions/auth';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';
import { useDarkMode } from './hooks/useDarkMode';
import AlertBox from './components/UI/AlertBox/AlertBox';


const App: React.FC = () => {
  const { theme, toggleTheme, componentMounted } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const isAuthenticated = useSelector(userExists);
  const error = useSelector(selectSignInError);

  const dispatch = useDispatch();

  const tryAutomaticSignin = useCallback(() => dispatch(getUserFromLocalStorage()), [dispatch]);

  useEffect(() => {
    tryAutomaticSignin();
  }, [tryAutomaticSignin])

  if (!componentMounted) {
    return <div />
  };
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
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
            {isAuthenticated ? <ChatRoom toggleTheme={toggleTheme} theme={theme} /> : <Login />}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <AlertBox open={error !== ''} error={error} />
    </ThemeProvider>
  );
}

export default App;
