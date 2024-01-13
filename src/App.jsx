import React from 'react'
import Routerconfig from './config/router/routerconfig'
import UserContextProvider from './context/user/UserContextProvider' 

const App = () => {
  return (
    <UserContextProvider>
      <Routerconfig />
    </UserContextProvider>
  )
}

export default App