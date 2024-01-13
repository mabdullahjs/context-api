import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/Home'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import Navbar from '../../components/Navbar'
import Protectedroutes from './protectedroutes'

const Routerconfig = () => {
  return (
    <BrowserRouter>
        <Navbar/>
    <Routes>
        {/* <Route path='/*' element={<Protectedroutes component={<Home/>}/>}/> */}
        <Route path='/*' element={<Protectedroutes component={<Home/>}/>}/>
        <Route path='login/*' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig