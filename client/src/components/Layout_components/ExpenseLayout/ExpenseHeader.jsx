import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
const ExpenseHeader = () => {
  return (
    <div className='flex justify-between items-center w-[100%] py-2 mb-4'>
        <img src={Logo} className="h-[40px] w-auto" alt='Logo'/>
        <ul className='flex gap-10 '>
            <li><Link to={'/expenses'}>Expense</Link></li>
            <li><Link to={'/transactions'}>Transactions</Link></li>
            <li><Link to={'/analytics'}>Analytics</Link></li>
        </ul>
        <div>
            <img src='https://avatar.iran.liara.run/public/boy' className='w-[40px] h-[40px] rounded-full '/>
                
            
        </div>
    </div>
  )
}

export default ExpenseHeader