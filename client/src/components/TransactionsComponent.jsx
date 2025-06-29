import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import AddExpenseModal from './AddExpenseModal.jsx';
import TableDiv from './TableDiv.jsx';
import { GrPowerReset } from "react-icons/gr";


const TransactionsComponent = ({modalIsOpen}) => {
  const [allExpenseData, setAllExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [Filters,setFilters] = useState({
    category:"",
    paymentMode:"",
    month:"",
  });

  const handleDeleteExpense = async ( id ) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_BASE_URL}/delete-expense/${id}`);
    
    if (response.status === 200) {
      toast.success("Expense Deleted Successfully");
    } else {
      toast.error("Failed to delete expense");
    }
  } catch (error) {
    toast.error("Cannot Delete Expense");
    console.error("Delete error:", error);
  }
};

   const getAllExpenseData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-all-expenses`);
      setAllExpenseData(response?.data?.data || []);
      setFilteredData(response?.data?.data || [])
      setLoading(false);
    } catch (error) {
      console.error('Error fetching expenses:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

   const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetFilter = ()=>{
    setFilteredData(allExpenseData);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        // setLoading(true);
      getAllExpenseData();
      // setLoading(false);
    }, 1000); // lazy load after 1 second
    return () => clearTimeout(timeoutId);
  }, [modalIsOpen]);

  useEffect(()=>{
    let data = [...allExpenseData];

    if (Filters.category) {
      data = data.filter(exp => exp.expenseCategory === Filters.category);
    }

    if (Filters.paymentMode) {
      data = data.filter(exp => exp.paymentMode === Filters.paymentMode);
    }

    if (Filters.month) {
      data = data.filter(exp => exp.month === Filters.month);
    }

    
    setFilteredData(data);
  },[Filters, allExpenseData])

const categoryOptions = ['Food', 'Travel', 'Shopping', 'Bills', 'Others'];
  const paymentOptions = ['Cash', 'Card', 'UPI', 'NetBanking', 'Other'];
  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];



  return (
    <>
    
      <div className='mb-4'>
        <div className='md:flex space-y-6 justify-between items-center'>
          <div>
            <h3 className='font-semibold'>Transactions</h3>
            <p className='text-sm font-medium text-gray-500'>
              You have {allExpenseData?.length} expenses.
            </p>
          </div>
          <div>
            {/* Filter Placeholder */}
            <div className='flex space-y-3 space-x-1 text-sm gap-2 items-center'>
            
            <select name="category" value={Filters.category} onChange={handleFilterChange} className='bg-gray-100 py-2  p-1 rounded-md'>
              <option value="">All Categories</option>
              {categoryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            <select name="paymentMode" value={Filters.paymentMode} onChange={handleFilterChange} className='bg-gray-100 py-2  p-1 rounded-md'>
              <option value="">All Payments</option>
              {paymentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            <select  name="month" value={Filters.month} onChange={handleFilterChange} className='bg-gray-100 py-2  p-1 rounded-md'>
              <option className='text-gray-800' value="">All Months</option>
              {monthOptions.map(opt => <option className='text-gray-800 p-2' key={opt} value={opt}>{opt}</option>)}
            </select>
            <div onClick= {handleResetFilter}className=' flex items-center justify-center w-[40px] p-1 bg-[#040404f6] rounded-sm'>
              <GrPowerReset size={30} color='white'/>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto py-2">
        <div className='flex justify-between items-center text-md py-3 border-b border-gray-300 text-gray-600'>
          <h6>Expense</h6>
          <h6>Amount</h6>
        </div>
      </div>
      <div>
        
       {loading ? (
  <Spinner />
) : filteredData && filteredData.length > 0 ? (
  <div>
    {filteredData.map((item, index) => (
      <TableDiv
      id={item._id}
        key={index}
        title={item.title}
        expenseCategory={item.expenseCategory}
        amount={item.amount}
        handleDeleteExpense={handleDeleteExpense}
      />
    ))}
  </div>
) : (
  <div className='flex flex-col justify-center items-center py-6 bg-gray-50'>
    <h6 className='text-gray-600 text-sm font-medium'>
      No expenses found.
    </h6>
     <h6 >Add New Expense</h6>
  </div>
)}

      </div>
    </>
  );
};

export default TransactionsComponent;
