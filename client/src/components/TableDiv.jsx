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
export default TableDiv;