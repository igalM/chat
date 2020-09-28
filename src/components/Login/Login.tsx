import React, { useState } from 'react';
import styles from './Login.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithUsername } from '../../store/actions/auth';
import { selectSignInLoading } from '../../store/reducers/selectors';
import { User } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const Login: React.FC = () => {
    const [showButton, setShowButton] = useState(true);
    const [username, setUsername] = useState('');

    const loading = useSelector(selectSignInLoading);

    const dispatch = useDispatch();

    const signInUsername = (user: User) => dispatch(signInWithUsername(user));

    const containerClasses = [styles.formContainer];
    if (!showButton) {
        containerClasses.push(styles.WithInput);
    }

    const connectToChatRoom = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        setShowButton(true);
        const newUser: User = {
            id: uuidv4(),
            username
        }
        signInUsername(newUser);
    }

    return (
        <div className={styles.Login}>
            <div className={containerClasses.join(' ')}>
                {showButton && <label onClick={() => !loading && setShowButton(false)}
                    className={styles.Label}>{loading ? 'Connecting...' : 'Start Chatting!'}
                </label>}
                <CSSTransition
                    in={!showButton}
                    timeout={300}
                    unmountOnExit
                    classNames={{
                        enterActive: styles.InputEntering,
                        enterDone: styles.InputEntered,
                        exitActive: styles.InputClosing
                    }}>
                    <form className={styles.Form} onSubmit={(e) => connectToChatRoom(e)}>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.Input} type="text"
                            placeholder="Username" />
                        <button disabled={username === ''} className={styles.Button} type="submit">Let's Go!</button>
                    </form>
                </CSSTransition>
            </div>
        </div>
    );
};

export default Login;