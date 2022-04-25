import React from 'react';
import { signup } from '../services/auth';

import axios from 'axios';




const SignUp = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

 const submitUserRegisteration= ()=>{
    signup(name,email,password)
 }
    return (
        <div className="App">
            <input type="text" placeholder="John" name="name" onChange={(event)=> setName(event.target.value)}/>
            <input type="email" placeholder="john@doe.com" name="email" onChange={(event)=> setEmail(event.target.value)} />
            <input type="password" placeholder="*********" name="password" onChange={(event)=> setPassword(event.target.value)}/>
            <button onClick={submitUserRegisteration}>Register</button>
        </div>
    );
}

export default SignUp;