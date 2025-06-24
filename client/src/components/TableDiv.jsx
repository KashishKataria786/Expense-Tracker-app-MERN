// import axios from "axios";
import { MdDelete, MdEditSquare } from "react-icons/md";
// import { toast } from "react-toastify";
const TableDiv = ({ title, expenseCategory, amount,id , deleteExpense}) => {





  return (
    <div className='py-2 border-b border-gray-100 flex justify-between items-center'>
      
        <div className="flex gap-20">
          
          <h4 className='text-md font-semibold'>  {title}</h4>
        <h6 className='px-3 border border-gray-400 text-sm font-semibold rounded-full'>
          😊{expenseCategory}
        </h6>
        </div>

      <div className="flex gap-4 justify-center items-center">
        <h4 className="font-semibold">₹{amount}</h4>
        <div onClick={()=>console.log("edit")}>
          <MdEditSquare size={25} color="gray"/>
          </div>
        <div onClick={()=>deleteExpense(id)} >
          <MdDelete  className="text-gray-300 hover:text-red-300" size={25}/>
        </div>
      </div>
    </div>
  );
};
export default TableDiv;