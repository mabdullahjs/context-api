import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to='/'>nestedone</Link>
      <Link to='/nestedtwo'>nestedtwo</Link>
      <Link to='/nestedthree'>nestedthree</Link>

      <Routes>
        <Route path='/' element={<h1>Nested One</h1>}/>
        <Route path='/nestedtwo' element={<h1>Nested two</h1>}/>
        <Route path='/nestedthree' element={<h1>Nested three</h1>}/>
      </Routes>
    </>
  )
}

export default Home