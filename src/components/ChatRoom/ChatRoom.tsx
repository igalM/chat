import React, { useState } from 'react';
import styles from './ChatRoom.module.scss';
import SendIcon from '@material-ui/icons/Send';
import { logoutUser } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

interface Props {
    theme: string;
    toggleTheme: () => void;
}

const ChatRoom: React.FC<Props> = ({ theme, toggleTheme }) => {

    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const logoutCurrentUser = () => dispatch(logoutUser());

    const textareaEnterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            submitMessage(e);
        }
    }

    const submitMessage = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        setMessage('');
    }

    return (
        <div className={styles.ChatRoom}>
            <header className={styles.Header}>
                <button onClick={logoutCurrentUser}>LOGOUT</button>
                {theme === 'light'
                    ? <Brightness4Icon onClick={toggleTheme} />
                    : <Brightness7Icon onClick={toggleTheme} />}
            </header>
            <section className={styles.Section}>
                <main className={styles.Main}>
                    <div style={{ height: '1000px' }}></div>
                </main>
                <form className={styles.Form} onSubmit={submitMessage}>
                    <textarea
                        placeholder="Start typing here..."
                        value={message}
                        onKeyPress={e => textareaEnterPressed(e)}
                        onChange={e => setMessage(e.target.value)}
                        className={styles.Textarea}></textarea>
                    {message !== '' && <button className={styles.Button} type="submit">
                        <SendIcon fontSize="large" style={{ color: '#6649b8' }} />
                    </button>}
                </form>
            </section>
        </div>
    );
};

export default ChatRoom;