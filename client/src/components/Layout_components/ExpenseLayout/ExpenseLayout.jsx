
import { useContext } from 'react'
import ExpenseHeader from './ExpenseHeader'
import { Internet_Status_Context } from '../../../context-api/InternetStatusContext'
import OfflineBanner from '../../OfflineBanner.jsx'
const ExpenseLayout = ({children}) => {

  const {isOnline}= useContext(Internet_Status_Context)
  return (
    <div className=' relative md:w-[70vw] px-3 mx-auto my-2'>
        <ExpenseHeader/>
        {isOnline ? <main>
            { children }
        </main>: <OfflineBanner/>}
    </div>
  )
}

export default ExpenseLayout