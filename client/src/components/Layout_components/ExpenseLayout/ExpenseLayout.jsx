
import ExpenseHeader from './ExpenseHeader'

const ExpenseLayout = ({children}) => {
  return (
    <div className=' relative w-[70vw] mx-auto my-2'>
        <ExpenseHeader/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default ExpenseLayout