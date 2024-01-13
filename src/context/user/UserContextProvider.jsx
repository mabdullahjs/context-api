import React, { useEffect, useState } from 'react'
import UserContext from './Usercontext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase/firebaseconfig'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth , (user)=>{
            if(user){
                setUser(user.uid);
                return
            }
        })
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider