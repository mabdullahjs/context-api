import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase/firebaseconfig';

const Protectedroutes = ({ component }) => {

     //state
     const [user, setUser] = useState(false);

     //use navigate 
     const navigate = useNavigate();

    //useeffect for checking user
    useEffect(() => {
        onAuthStateChanged(auth , (user)=>{
            if(user){
                console.log('user');
                setUser(true)
            }else{
                console.log('user katao');
                navigate('/login')
            }
        })
    }, [])
   

    return (
        user ? component : <h1>Loading...</h1>
    )
}

export default Protectedroutes