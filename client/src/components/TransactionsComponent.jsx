import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const TableDiv = ({ title, expenseCategory, amount }) => {
  return (
    <div className='py-2 border-b border-gray-100 flex justify-between items-center'>
      <div className='flex items-center gap-20'>
        <h4 className='text-md font-semibold'>{title}</h4>
        <h6 className='px-3 border border-gray-400 text-sm font-semibold rounded-full'>
          😊{expenseCategory}
        </h6>
      </div>
      <h4>₹{amount}</h4>
    </div>
  );
};

const TransactionsComponent = () => {
  const [allExpenseData, setAllExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllExpenseData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-all-expenses`);
      setAllExpenseData(response?.data?.data || []);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getAllExpenseData();
    }, 1000); // lazy load after 1 second
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className='mb-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='font-semibold'>Transactions</h3>
            <p className='text-sm font-medium text-gray-500'>
              You have 2 incomes and 3 expenses this month
            </p>
          </div>
          <div>
            {/* Filter Placeholder */}
            <h1>Filter</h1>
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
        ) : allExpenseData.length > 0 ? (
          <div>
            {allExpenseData.map((item, index) => (
              <TableDiv
                key={index}
                title={item.title}
                expenseCategory={item.expenseCategory}
                amount={item.amount}
              />
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center bg-gray-100 py-4'>
            <h6 className='text-gray-500 text-sm'>No Expenses Found</h6>
          </div>
        )}
      </div>
    </>
  );
};

export default TransactionsComponent;
