import React, { useState } from 'react';
import styles from './Login.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithUsername } from '../../store/actions/auth';
import { selectSignInLoading } from '../../store/reducers/selectors';
import { User } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const Form = styled.form`
padding: 0.625em;
box-sizing: border-box;
box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.3);
display: flex;
justify-content: center;
width: 100%;
border-radius: 6.25em;
background-color: ${({ theme }) => theme.loginLabel};`

const Container = styled.div.attrs(props => ({
    className: props.className
}))`
&.WithInput {
    width: 400px;
    transition: 300ms;
}
width: 200px;
height: 65px;
position: relative;
font-weight: 700;
box-sizing: border-box;
box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.3);
display: flex;
justify-content: center;
border-radius: 6.25em;
background-color: ${({ theme }) => theme.loginLabel};
transition: 300ms;
`;

const Label = styled.label`
border-radius: 6.25em;
background-color: ${({ theme }) => theme.loginLabel};
width: 200px;
height: 65px;
outline: 0;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
`;

const Input = styled.input`
font-weight: 700;
font-size: 18px;
border: 0;
outline: 0;
border-radius: 5em;
box-sizing: border-box;
height: 100%;
width: 100%;
padding: 0 0.714em;
background-color: ${({ theme }) => theme.formInput};
color: ${({ theme }) => theme.text};`;

const Button = styled.button`
background-color: ${({ theme }) => theme.formButton.background};
color: ${({ theme }) => theme.formButton.color};
height: 100%;
width: auto;
font-size: 18px;
padding: 0;
height: 100%;
width: 160px;
border: 0;
font-weight: 700;
outline: 0;
border-radius: 5em;
box-sizing: border-box;
cursor: pointer;`

const Login: React.FC = () => {
    const [showButton, setShowButton] = useState(true);
    const [username, setUsername] = useState('');

    const loading = useSelector(selectSignInLoading);

    const dispatch = useDispatch();

    const signInUsername = (user: User) => dispatch(signInWithUsername(user));

    const containerClasses = [];
    if (!showButton) {
        containerClasses.push('WithInput');
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
            <Container className={containerClasses.join(' ')}>
                {showButton && <Label
                    onClick={() => !loading && setShowButton(false)}>
                    {loading ? 'Connecting...' : 'Start Chatting!'}
                </Label>}
                <CSSTransition
                    in={!showButton}
                    timeout={300}
                    unmountOnExit
                    classNames={{
                        appear: styles.AppearActive,
                        appearDone: styles.Appeared,
                        enterActive: styles.InputEntering,
                        enterDone: styles.InputEntered,
                        exitActive: styles.InputClosing
                    }}>
                    <Form onSubmit={(e) => connectToChatRoom(e)}>
                        <Input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username" />
                        <Button disabled={username === ''} type="submit">Let's Go!</Button>
                    </Form>
                </CSSTransition>
            </Container>
        </div>
    );
};

export default Login;