export const BASE_URL = process.env.REACT_APP_API_URI || '';

export enum ChatEvent {
    InitMessages = 'InitMessages',
    NewMessage = 'NewMessage',
    Disconnect = 'disconnect'
}
