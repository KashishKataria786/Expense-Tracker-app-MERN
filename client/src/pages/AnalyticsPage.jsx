import React, { useContext, useEffect, useState } from 'react';
import ExpenseLayout from '../components/Layout_components/ExpenseLayout/ExpenseLayout';
import axios from 'axios';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Spinner from '../components/Spinner';

// Register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticsPage = () => {
  const [loading, setLoading] = useState(false);
  const [allExpenseData, setAllExpenseData] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/get-all-expenses`
        );
        const expenses = response?.data?.data || [];
        const modifiedData = expenses.map((x) => ({
          amount: x.amount,
          month: x.month,
          expenseCategory: x.expenseCategory,
        }));
        setAllExpenseData(modifiedData);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const Categories = [...new Set(allExpenseData.map(e => e.expenseCategory))];

  const categoryColors = {
    Shopping: "#f39c12",
    Bills: "#2980b9",
    Personel: "#8e44ad",
    Food: "#27ae60",
    Others: "#95a5a6"
  };

  const monthlyCategoryAmount = {};
  months.forEach((month) => {
    monthlyCategoryAmount[month] = {};
    Categories.forEach((category) => {
      monthlyCategoryAmount[month][category] = 0;
    });
  });

  allExpenseData.forEach(({ amount, month, expenseCategory }) => {
    if (monthlyCategoryAmount[month]) {
      monthlyCategoryAmount[month][expenseCategory] += amount;
    }
  });

  const chartData = {
    labels: months,
    datasets: Categories.map((category) => ({
      label: category,
      backgroundColor: categoryColors[category] || "#ccc",
      data: months.map((month) => monthlyCategoryAmount[month][category]),
      stack: 'Stack 0',
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
  };

  return (
    <ExpenseLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <h2 className="font-semibold">2025</h2>
      </div>

      {loading ? (
        <div className="text-center text-gray-500"><Spinner/></div>
      ) : (
        <div className="w-full max-w-5xl mx-auto p-4">
          <h2 className="text-xl font-semibold text-center mb-4">Monthly Expenses Overview</h2>
          <Bar data={chartData} options={options} />
        </div>
      )}
    </ExpenseLayout>
  );
};

export default AnalyticsPage;
