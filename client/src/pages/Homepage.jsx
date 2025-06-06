import React from 'react'
import Layout from '../components/Layout_components/Layout.jsx'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center min-h-[90vh] flex-col space-y-5 text-center'>
        <img className='h-[100px] w-auto' src={logo}/>
        <h2 className='font-bold text-5xl '>See the Big Picture of Your Finances <br/>Without Getting Lost in the Details</h2>
        <p>Track all your expenses effortlessly and make smarter money decisions—whether you're a student, professional, or entrepreneur. </p>
        <div>
          <button><Link to ='/expenses'>Add Expense</Link></button>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage