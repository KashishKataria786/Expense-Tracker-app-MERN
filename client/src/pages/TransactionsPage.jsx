import React from 'react'
import ExpenseLayout from '../components/Layout_components/ExpenseLayout/ExpenseLayout'
import TransactionsComponent from '../components/TransactionsComponent'

const TransactionsPage = () => {
  return (
    <ExpenseLayout>
        <div className='flex items-center justify-between '>
            <h1 className='text-2xl font-bold'>Transactions</h1>
            <h2 className='font-semibold '>2025</h2>
        </div> 
        <TransactionsComponent/>
    </ExpenseLayout>
  )
}

export default TransactionsPage