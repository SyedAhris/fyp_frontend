import React, {useState} from 'react';
import './Login.css'
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import {login, UserState} from "../../Reducers/User";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Handle the input change event and perform any necessary actions
        setEmail(value);
    };
    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Handle the input change event and perform any necessary actions
        setPassword(value);
    };
    const handleLoginClick = () => {
        // call api to login which returns user state object

        let user : UserState = {
            name: 'John Doe',
            email: email,
            password: password,
            token: '',
            isSuper: false
        }
        postData(user);
        // dispatch login action
        // dispatch(login(user));

        // console.log(email, password);

    };

    const postData = async (user: UserState) => {
        try {
            console.log(user);
            const response = await fetch('https://fypexpress.ahris.ninja/auth/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                user.token = data.accessToken;
                user.name = data.user.name;
                if (data.user.role === 'Admin') {
                    user.isSuper = true;
                } else {
                    user.isSuper = false;
                }
                dispatch(login(user));
                navigate('/statistics');
            } else {
                throw new Error('Post request failed');
            }
        } catch (error) {
            console.error('Error making post request', error);
        }
    };
    return (
        <div className={'login-layout'}>
            <img className={'login-image'} src="./loginImage.png" alt="Italian Trulli"/>
            <div className={'login-content-div'}>
                <div className={'login-heading'}>
                    <div className={'heading-sub'}>Welcome back! 👋</div>
                    <div className={'heading-main'}>Login to account</div>
                </div>
                <TextField label={'Email'} type={'email'} placeholder={'Enter your username'} onChange={handleEmailChange}/>
                <TextField label={'Password'} type={'password'} placeholder={'Enter your password'} onChange={handlePassChange}/>
                <Button label={'Login'} onClick={handleLoginClick} />
            </div>
        </div>
    );
}

export default Login;