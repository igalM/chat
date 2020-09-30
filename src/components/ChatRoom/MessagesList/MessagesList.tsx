import React from 'react';
import { transformUnixToDateSent } from '../../../shared/utility';
import { Message } from '../../../types';
import styles from './MessagesList.module.scss';

interface ListProps {
    messages: Message[];
    userId: string | undefined;
}

interface ItemProps {
    message: Message;
    userId: string | undefined;
}

const MessageItem: React.FC<ItemProps> = ({ message, userId }) => {
    const messageClass = userId === message.user._id ? styles.Sent : styles.Received;
    const timestamp = transformUnixToDateSent(message.createdAt);
    return (
        <div className={`${styles.Message} ${messageClass}`}>
            {userId !== message.user._id && <p
                className={styles.Username}>
                {message.user.username}
            </p>}
            <p>{message.body}</p>
            <p className={styles.Timestamp}>{timestamp}</p>
        </div>
    );
};

const MessagesList: React.FC<ListProps> = ({ messages, userId }) => {
    const content = messages.map((item, index) => (
        <MessageItem
            key={`${item._id}${index}`}
            message={item}
            userId={userId}
        />
    ));
    return (
        <div className={styles.List}>
            {content}
        </div>
    );
}

export default React.memo(MessagesList);