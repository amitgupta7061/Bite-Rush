import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {toast} from 'react-hot-toast'
import axios from 'axios'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {backendUrl, setAToken} = useContext(AppContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            console.log(email, password);
            const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password});
            console.log(data);
            if(data.success){
                setAToken(data.token);
                localStorage.setItem('aToken', data.token);
                toast.success(data.message);
            } else{
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! Please try again.");
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[100vh] flex items-center">
        <div className=" flex flex-col gap-5 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl text-orange-500 font-semibold">Admin Login</p>
    
          <div className="w-full flex flex-col gap-2">
            <p>Email</p>
            <input className='border-[1px] w-full px-4 py-3 bg-transparent border-[#595959] rounded-lg outline-none tracking-wider text-gray-400' type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
          </div>

          <div className="w-full flex flex-col gap-2">
            <p>Password</p>
            <input className='border-[1px] w-full px-4 py-3 bg-transparent border-[#595959] rounded-lg outline-none tracking-wider text-gray-400' type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
          </div>

          <button className="px-5 py-2 text-[17px] bg-orange-500 text-white rounded-lg flex items-center gap-2 ">Login</button>
        </div>
    </form>
  )
}

export default LoginPage
