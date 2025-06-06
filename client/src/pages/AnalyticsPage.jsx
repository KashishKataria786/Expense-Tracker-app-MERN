import React from 'react'
import ExpenseLayout from '../components/Layout_components/ExpenseLayout/ExpenseLayout'
import Charts_Analytic from '../components/Charts_Analytic'

const AnalyticsPage = () => {
  return (
     <ExpenseLayout>
        <div className='flex items-center justify-between mb-8'>
            <h1 className='text-2xl font-bold'>Analytics</h1>
            <h2 className='font-semibold '>2025</h2>
        </div>
        <Charts_Analytic/>

    </ExpenseLayout>
  )
}

export default AnalyticsPage