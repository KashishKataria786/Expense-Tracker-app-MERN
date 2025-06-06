import React from 'react'
import ExpenseLayout from '../components/Layout_components/ExpenseLayout/ExpenseLayout'
import InsightBox from '../components/InsightBox.jsx'
import TransactionsComponent from '../components/TransactionsComponent.jsx'
 const insightData = [
    {type:"Income",
        quantity:"12,34,343",
        percentage:13
    },
    {type:"Expense",
        quantity:"12,34,343",
        percentage:13
    },
    {type:"Investment",
        quantity:"12,34,343",
        percentage:13
    },
    {type:"Savings",
        quantity:"12,34,343",
        percentage:13
    },
 ]

const ExpensePage = () => {
  return (
    <ExpenseLayout>
        <div className='flex items-center justify-between '>
            <h1 className='text-2xl font-bold'>Summary</h1>
            <h2 className='font-semibold '>2025</h2>
        </div>
        <div className='grid grid-cols-4 justify-between items-center py-5'>
            {insightData?.map((item,index)=>{
                return(
                    < InsightBox key={index} type={item.type} quantity={item.quantity} percentage={item.percentage}/>
                )
            })}
        </div>
        <TransactionsComponent/>
    </ExpenseLayout>
  )
}

export default ExpensePage