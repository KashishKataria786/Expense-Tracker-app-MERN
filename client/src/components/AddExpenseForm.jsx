import React, { useState } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
const AddExpenseForm = ({ setModalIsOpen}) => {
  const [formData, setFormData] = useState({
     amount:"",
      title:"",
      date:"",
      month:"",
      year:"",
      expenseCategory:"",
      description:"",
      paymentMode:""

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
         formData 
      );
      if (newExpense) {
        toast.success(`${newExpense?.data?.message}`);
      } else {
        toast.info("Failed");
      }
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


  const years = ["2021","2022","2023", "2024", "2025"];

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
      </div>
       <div >

          <div className="grid grid-cols-3 gap-2">
         <div>
    <label className="block text-sm font-medium">Day</label>
    <select
      name="date"
      value={formData.date}
      onChange={handleChange}
      required
      className="border px-3 py-1 rounded"
    >
      <option value="">Select Day</option>
      {days.map(day => (
        <option key={day} value={day}>{day}</option>
      ))}
    </select>
  </div>
           <div>
    <label className="block text-sm font-medium">Month</label>
    <select
      name="month"
      value={formData.month}
      onChange={handleChange}
      required
      className="border px-3 py-1 rounded"
    >
      <option value="">Select Month</option>
      {months.map(month => (
        <option key={month} value={month}>{month}</option>
      ))}
    </select>
  </div>
          <div>
    <label className="block text-sm font-medium">Year</label>
    <select
      name="year"
      value={formData.year}
      onChange={handleChange}
      required
      className="border px-3 py-1 rounded"
    >
      <option value="">Select Year</option>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  </div>
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
            name="expenseCategory"
            value={formData.expenseCategory}
            onChange={handleChange}
            className="w-full bg-gray-100 px-2 py-2 rounded"
            required
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Tavel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Others">Others</option>
            <option value="Personel">Personel</option>

          </select>
        </div>

        <div>
          <label className="block font-medium">Payment Mode</label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="w-full bg-gray-100 px-2 py-2 rounded"
            required
          >
            <option value="">Select a A Payment Mode</option>
            <option className="flex gap-1" value="Cash">
              Cash
            </option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="NetBanking">Net Banking</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full  bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
