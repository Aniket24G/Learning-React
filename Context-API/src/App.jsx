import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'

function App() {

  return (
    <UserContextProvider>
      <h2>React state Management and Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
