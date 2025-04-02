import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {setAToken} = useContext(AppContext);
  const logoutHandler = () => {
    localStorage.removeItem('aToken');
    setAToken('');
  }

  return (
    <div className='flex justify-between items-center px-4  md:px-10'>
      <div className='flex items-center gap-4'>
        <img className='h-14' src={logo} alt="" />
        <button className='border-[1px] rounded-full px-3 py-0.5'>Admin</button>
      </div>
      <button onClick={logoutHandler} className='bg-orange-500 px-4 py-1 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
