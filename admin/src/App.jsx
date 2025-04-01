import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import LoginPage from './pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/Sidebar'
import { Routes, Route} from 'react-router-dom'

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
      <div className='flex h-screen w-full'>
        <Sidebar />
        <div>
          <Routes>
            <Route />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
