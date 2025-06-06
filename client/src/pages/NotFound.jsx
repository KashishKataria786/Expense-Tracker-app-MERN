import React from 'react'
import Layout from '../components/Layout_components/Layout'
import logo from '../assets/logo.png' 
const NotFound = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-2 items-center justify-center min-h-[80vh]'>
            <img className='h-[100px] w-auto' src={logo}/>
    
                <h1>Eror 404! Page Not Found</h1>
      </div>
    </Layout>
  )
}

export default NotFound