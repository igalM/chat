export const BASE_URL = process.env.REACT_APP_LOCALHOST || '';

export enum ChatEvent {
    InitMessages = 'InitMessages',
    NewMessage = 'NewMessage',
    Disconnect = 'disconnect'
}
