import React, { useEffect, useRef, useState } from 'react';
import styles from './ChatRoom.module.scss';
import SendIcon from '@material-ui/icons/Send';
import { logoutUser } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import useChat from '../../hooks/useChat';
import MessagesList from './MessagesList/MessagesList';
import { isMobile } from 'react-device-detect';
import LogoutDialog from './LogoutDialog/LogoutDialog';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

interface Props {
    theme: string;
    toggleTheme: () => void;
}

const ChatRoom: React.FC<Props> = ({ theme, toggleTheme }) => {
    const { messages, sendMessage, user, currentlyOnlineUsers } = useChat();
    const [showDialog, setShowDialog] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const scrollToDummyDiv = useRef<HTMLDivElement>(null);

    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const logoutCurrentUser = () => {
        dispatch(logoutUser());
        handleDialogClose();
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    useEffect(() => {
        scrollToDummyDiv.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [messages]);

    const textareaEnterPressed = (e: React.KeyboardEvent) => {
        if (isMobile) return;
        if (e.key === 'Enter' && !e.shiftKey) {
            submitMessage(e);
        }
    }

    const submitMessage = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        if (message.trim() !== '') {
            sendMessage(message);
        }
        setMessage('');
    }

    const handleDialogClose = () => setShowDialog(false);

    const handleLogoutClicked = () => {
        setShowDialog(true);
        handleMenuClose();
    }

    const onlineUsers = Object.keys(currentlyOnlineUsers).length;

    return (
        <div className={styles.ChatRoom}>
            <header className={styles.Header}>
                <h2>{onlineUsers} Online</h2>
                {/* {theme === 'light'
                    ? <Brightness4Icon onClick={toggleTheme} />
                    : <Brightness7Icon onClick={toggleTheme} />} */}
                <IconButton className={styles.Menu} color="inherit" onClick={handleMenuClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleLogoutClicked}>Logout</MenuItem>
                </Menu>
            </header>
            <section className={styles.Section}>
                <main className={styles.Main}>
                    <MessagesList
                        messages={messages}
                        userId={user?._id && user._id}
                        currentlyOnlineUsers={currentlyOnlineUsers}
                    />
                    <div ref={scrollToDummyDiv}></div>
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
            <LogoutDialog
                show={showDialog}
                handleClose={handleDialogClose}
                logout={logoutCurrentUser} />
        </div>
    );
};

export default ChatRoom;