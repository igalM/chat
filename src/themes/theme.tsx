import { DefaultTheme } from "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        loginLabel: string;
        formButton: {
            color: string;
            background: string;
        };
        formInput: string;
        body: string;
        text: string;
    }
}

export const lightTheme: DefaultTheme = {
    loginLabel: '#1c1f25',
    formButton: {
        color: '#1c1f25',
        background: 'white'
    },
    formInput: '#1c1f25',
    body: '#E2E2E2',
    text: 'white'
}

export const darkTheme: DefaultTheme = {
    loginLabel: 'white',
    formButton: {
        color: 'white',
        background: '#282c34'
    },
    formInput: 'white',
    body: '#1c1f25',
    text: '#1c1f25'
}