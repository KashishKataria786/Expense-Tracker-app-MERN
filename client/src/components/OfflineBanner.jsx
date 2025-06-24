import { useContext } from 'react'
import { Internet_Status_Context } from '../context-api/InternetStatusContext.jsx'
import logo from '../assets/logo.png';
const OfflineBanner = () => {

    const {isOnline} =useContext(Internet_Status_Context)

    if(isOnline)return null
    else{
       return (
    <main className='fixed gap-2 bg-white min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <img src={logo} alt='logo'/>
        <h1>You are Offline </h1>
        <h2 className='text-xl font-light text-gray-700'>Try Connecting to Internet</h2>
    </main>
  )
    }
}

export default OfflineBanner
