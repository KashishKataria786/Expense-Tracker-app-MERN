import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { HeaderContext } from '../../../context-api/HeaderContext'
import { GrClose, GrMenu } from 'react-icons/gr'
const ExpenseHeader = () => {

  const {headerOpen, toggleHeaderState}= useContext(HeaderContext);


  return (
    <>

    <div className='relative flex justify-between items-center w-[100%] py-2 mb-4'>
        <img src={Logo} className="h-[40px] w-auto" alt='Logo'/>
        <ul  className='hidden md:flex gap-10 '>
            <li><Link to={'/expenses'}>Expense</Link></li>
            <li><Link to={'/transactions'}>Transactions</Link></li>
            <li><Link to={'/analytics'}>Analytics</Link></li>
        </ul>
        <div className='hidden md:flex'>
            <img src='https://avatar.iran.liara.run/public/boy' className='w-[40px] h-[40px] rounded-full '/>
        </div>
       <div onClick={()=>toggleHeaderState()} className='md:hidden flex'>
        {headerOpen?<GrClose/>:    <GrMenu/>}
      </div> 
    </div>
    

      {headerOpen &&<div className=' min-h-full absolute  bg-white md:flex justify-between items-center w-[100%] py-2 mb-4'>
        <ul className='md:flex space-y-4 text-2xl md:text-md gap-10 '>
            <li><Link to={'/expenses'}>Expense</Link></li>
            <li><Link to={'/transactions'}>Transactions</Link></li>
            <li><Link to={'/analytics'}>Analytics</Link></li>
        </ul>
        <div>
            <img src='https://avatar.iran.liara.run/public/boy' className='w-[40px] h-[40px] rounded-full '/>
        </div>
    </div>}

    </>
  )
}

export default ExpenseHeader