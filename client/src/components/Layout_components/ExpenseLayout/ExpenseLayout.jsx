
import ExpenseHeader from './ExpenseHeader'

const ExpenseLayout = ({children}) => {
  return (
    <div className=' relative md:w-[70vw] px-3 mx-auto my-2'>
        <ExpenseHeader/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default ExpenseLayout