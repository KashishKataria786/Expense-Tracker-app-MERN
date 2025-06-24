import React, { useState } from 'react'
import ExpenseLayout from '../components/Layout_components/ExpenseLayout/ExpenseLayout'
import InsightBox from '../components/InsightBox.jsx'
import TransactionsComponent from '../components/TransactionsComponent.jsx'
import AddExpenseModal from '../components/AddExpenseModal.jsx'
import { IoIosAdd } from 'react-icons/io'

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
    const[modalIsOpen,setModalIsOpen]= useState(false);
  return (
    <ExpenseLayout>
        {modalIsOpen&&<AddExpenseModal modalIsOpen={modalIsOpen}  setModalIsOpen={setModalIsOpen}/>}
        <div className='flex items-center justify-between '>
            <h2 className='text-5xl font-bold'>Summary</h2>
           <button className='flex justify-center items-center' onClick={()=>setModalIsOpen(true)}><IoIosAdd className='font-bold' size={25}/>Add Expense</button>
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center py-5'>
            {insightData?.map((item,index)=>{
                return(
                    < InsightBox key={index} type={item.type} quantity={item.quantity} percentage={item.percentage}/>
                )
            })}
        </div>
        <TransactionsComponent modalIsOpen={modalIsOpen}/>
    </ExpenseLayout>
  )
}

export default ExpensePage