import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const Charts_Analytic = ({data}) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const Categories = [...new Set(data.map(e=>e.expenseCategory))];
  console.log(Categories);

  const categoryColors = {
    Shopping: "#f39c12",
    Bills: "#2980b9",
    Personel: "#8e44ad",
    Food: "#27ae60",
    Others: "#95a5a6"
  };

  // 2D Array
  const monthyCategoryAmount ={};
  months.forEach(month=>{
    monthyCategoryAmount[month]={};
    Categories.forEach(category=>{
      monthyCategoryAmount[month][category]=0;
    })
  })

  data?.forEach(({amount, month , expenseCategory})=>{
    if(monthyCategoryAmount[month]){
      monthyCategoryAmount[month][expenseCategory]+=amount;
    }
  });

  const chartData ={
    labels:months,
    datasets : Categories?.map(category=>({
      label:category,
      backgroundColor:categoryColors[category || "#ccc"],
      data: months.map(month=>monthyCategoryAmount[month][category]),
      stack:'Stack 0',
    }))
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true }
    }
  };
  connst

  return (
    <div>Charts_Analytic</div>
  )
}

export default Charts_Analytic