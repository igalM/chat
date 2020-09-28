import React from 'react';
import styles from './ChatRoom.module.scss';

const ChatRoom: React.FC = () => {
    return (
        <div className={styles.ChatRoom}>
            <header className={styles.Header}></header>
            <section className={styles.Section}></section>
            <footer className={styles.Footer}></footer>
        </div>
    );
};

export default ChatRoom;