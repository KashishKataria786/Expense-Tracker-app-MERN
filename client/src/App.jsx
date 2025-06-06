import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'
import AnalyticsPage from './pages/AnalyticsPage.jsx'
import ExpensePage from './pages/ExpensePage.jsx'
import TransactionsPage from './pages/TransactionsPage.jsx'
  import { ToastContainer, toast } from 'react-toastify';
function App() {
  

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/analytics' element={<AnalyticsPage/>}/>
        <Route path='/expenses' element={<ExpensePage/>}/>
        <Route path='/transactions' element={<TransactionsPage/>}/>
      </Routes>
    </>
  )
}

export default App
