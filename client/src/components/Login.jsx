import React from 'react';
import axios from 'axios';
import { login } from '../services/auth';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, sePassword] = React.useState('');

    const handleEmail = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => sePassword(event.target.value);

    const handleSubmit = () => {
        login(email, password)
    };

    return (
        <div>
            <input type="text" placeholder="Email" onChange={handleEmail} value={email} />
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
            <button type="button" onClick={handleSubmit}>Login</button>
        </div>
    )
};

export default Login