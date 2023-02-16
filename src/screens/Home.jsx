import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/kiwify-green-logo.png';

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center gap-2'>
      <div className='mt-10'>
        <img src={logo} alt="logo" className='w-32' />
      </div>

      <div className='text-gray-600 text-xl font-semibold'>Demo work</div>

      <div className='flex justify-center items-center gap-2'>
        <Link to="/login" className='text-lg text-blue-700'>Login</Link>
        <Link to="/register" className='text-lg text-blue-700'>Register</Link>
      </div>
    </div>
  )
}

export default Home