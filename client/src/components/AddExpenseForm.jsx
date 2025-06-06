import React, { useState } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const AddExpenseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    expenseCategory: "",
    amount: "",
    dateOfExpense: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newExpense = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/add-expense`,
        { formData }
      );
      if (newExpense) {
        toast.success(`${newExpense?.data?.message}`);
      } else {
        toast.info("Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-2 p-2 ">
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-gray-100 px-2 py-2 rounded"
          placeholder="Enter expense title"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 ">
        <div>
          <label className="block font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full bg-gray-100 px-2 py-2 rounded"
            placeholder="Enter amount in ₹"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="text"
            name="Date"
            value={formData.dateOfExpense}
            onChange={handleChange}
            className="w-full bg-gray-100 px-2 py-2 rounded"
            placeholder="Enter Date"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-gray-100 px-2 py-2 rounded"
          placeholder="Enter a brief description"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-gray-100 px-2 py-2 rounded"
            required
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Payment Mode</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-gray-100 px-2 py-2 rounded"
            required
          >
            <option value="">Select a A Payment Mode</option>
            <option className="flex gap-1" value="GooglePay">
              <div className="flex gap-1"></div>
            </option>
            <option value="Cred">Cred</option>
            <option value="Credit Card">Credit card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="others">Cash</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-10 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
