import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import LoginPage from './pages/LoginPage'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const {aToken} = useContext(AppContext)

  return (
    !aToken ? 
    <div>
      <Toaster />
      <LoginPage />
    </div>
    :
    <div>
      <Toaster />
      
    </div>
  )
}

export default App
