
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'
import AnalyticsPage from './pages/AnalyticsPage.jsx'
import ExpensePage from './pages/ExpensePage.jsx'
import TransactionsPage from './pages/TransactionsPage.jsx'
import { ToastContainer } from 'react-toastify';
import OfflineBanner from './components/OfflineBanner.jsx'

function App() {
  

  return (
    <>
    <OfflineBanner/>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/analytics' element={<AnalyticsPage/>}/>
        <Route path='/expenses' element={<ExpensePage/>}/>
        <Route path='/transactions' element={<TransactionsPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
