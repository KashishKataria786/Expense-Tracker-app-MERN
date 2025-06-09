import React from 'react'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='flex  justify-between items-center  w-[100%] p-4'>
      <div className='flex gap-3 items-center'>
        <img className='h-[50px]' src={logo} />
      <h2 className='font-bold '>Expensor</h2>
      </div>
    </div>
  )
}

export default Header