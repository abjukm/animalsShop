import React from 'react'
import logo from '../assets/introImg/logo.png'

const Header = () => {
  return (
    <>
      <div className='bg-black h-20 w-full flex justify-around items-center fixed top-0 left-0 z-20'>
        <img className='rounded-[50%] ' src={logo} alt="" />
        <p className='text-white'>Find everything that you need for your pet</p>
        <p className='text-white'>PetShop</p>
      </div>
    </>
  )
}

export default Header
