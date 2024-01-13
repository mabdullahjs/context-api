import React, { useRef, useState, useContext } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Button, CircularProgress, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/Usercontext';

const Login = () => {
  //use state
  const [loading, setLoading] = useState(false);

  //use navigate
  const navigate = useNavigate();

  //use context for global state
  const {setUser} = useContext(UserContext)


  //useref for forms
  const email = useRef();
  const password = useRef();
  const loginUser = (event) => {
    event.preventDefault();
    setLoading(true)
    const email2 = email.current.value;
    const password2 = password.current.value;
    signInWithEmailAndPassword(auth, email2, password2)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user.uid);
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false)
      });

  }
  return (
    <div style={{ height: '90vh' }} className='d-flex justify-content-center align-items-center'>
      <form className='d-flex justify-content-center flex-column w-25 gap-5 text-center' onSubmit={loginUser}>
        <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} />
        <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} />
        <Button type='submit' variant="contained">{loading ? <CircularProgress className='text-light' size='1.5rem' /> : 'Login'}</Button>
      </form>
    </div>
  )
}

export default Login