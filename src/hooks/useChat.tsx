import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import { BASE_URL, INIT_MESSAGES, NEW_CHAT_MESSAGE_EVENT } from "../consts";
import { transformDateToUnix } from "../shared/utility";
import { selectCurrentUser } from "../store/reducers/selectors";
import { Message } from "../types";

const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const user = useSelector(selectCurrentUser);
    const socketRef = useRef<SocketIOClient.Socket>();

    useEffect(() => {

        socketRef.current = socketIOClient(BASE_URL);

        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: Message) => {
            setMessages((messages) => [...messages, message]);
        });

        socketRef.current.on(INIT_MESSAGES, (messages: Message[]) => {
            setMessages(messages.reverse());
        });

        fetchLatestMessages();

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const sendMessage = (message: string) => {
        socketRef.current?.emit(NEW_CHAT_MESSAGE_EVENT, {
            user: user,
            body: message,
            createdAt: transformDateToUnix()
        });
    };

    const fetchLatestMessages = () => {
        socketRef.current?.emit(INIT_MESSAGES);
    }

    return { messages, sendMessage, user };
};

export default useChat;