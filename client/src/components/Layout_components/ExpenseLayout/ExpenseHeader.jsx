import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseHeader = () => {
  return (
    <div className='flex justify-between items-center w-[100%] py-5 mb-4'>
        <h2 className='font-bold text-2xl'>Expensr</h2>
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