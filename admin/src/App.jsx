import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import LoginPage from './pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/Sidebar'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Order from './components/Order'
import AddItem from './components/AddItem'
import Menu from './components/Menu'
import Users from './components/Users'

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
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/orders' element={<Order />}/>
          <Route path='/add-item' element={<AddItem />}/>
          <Route path='/see-items' element={<Menu />}/>
          <Route path='/see-users' element={<Users />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
