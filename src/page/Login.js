import React, { useState } from 'react';
import { auth } from '../firebase';
import { NavLink } from 'react-router-dom';
import {  signInWithEmailAndPassword  } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle login success
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Login;
