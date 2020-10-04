import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import { BASE_URL, ChatEvent } from "../consts";
import { transformDateToUnix } from "../shared/utility";
import { selectCurrentUser } from "../store/reducers/selectors";
import { Message, OnlineUsers } from "../types";

const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentlyOnlineUsers, setCurrentlyOnlineUsers] = useState<OnlineUsers>({});

    const user = useSelector(selectCurrentUser);

    const socketRef = useRef<SocketIOClient.Socket>();

    const fetchLatestMessages = useCallback(() => {
        socketRef.current?.emit(ChatEvent.InitMessages, user?._id);
    }, [user]);

    useEffect(() => {


        if (user) {

            socketRef.current = socketIOClient(BASE_URL);

            socketRef.current.on(ChatEvent.NewMessage, (message: Message) => {
                setMessages((messages) => [...messages, message]);
            });

            socketRef.current.on(ChatEvent.InitMessages, (messages: Message[], onlineUsers: OnlineUsers) => {
                setCurrentlyOnlineUsers(onlineUsers);
                setMessages(messages.reverse());
            });

            socketRef.current.on(ChatEvent.Disconnect, (onlineUsers: OnlineUsers | string) => {
                if (typeof onlineUsers !== 'string') {
                    setCurrentlyOnlineUsers(onlineUsers);
                }
            });

            fetchLatestMessages();

        }
        return () => {
            socketRef.current?.disconnect();
        };
    }, [user, fetchLatestMessages]);

    const sendMessage = (message: string) => {
        socketRef.current?.emit(ChatEvent.NewMessage, {
            user: user,
            body: message,
            createdAt: transformDateToUnix()
        });
    };


    return { messages, sendMessage, user, currentlyOnlineUsers };
};

export default useChat;