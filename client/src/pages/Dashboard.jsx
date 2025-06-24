import React from 'react'
import Layout from '../components/Layout_components/Layout.jsx'
import ExpenseLayout from '../components/Layout_components/ExpenseLayout/ExpenseLayout.jsx'
import { useExpenseData } from '../customHooks/useExpenseData..jsx'

const Dashboard = () => {
  const {allExpenseData}= useExpenseData()
  return (
    <ExpenseLayout>
      <div>
      {JSON.stringify(allExpenseData,0)}
      </div>
    </ExpenseLayout>
  )
}

export default Dashboard