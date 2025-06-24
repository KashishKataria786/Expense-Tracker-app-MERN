
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useContext } from 'react'
import { Internet_Status_Context } from '../../context-api/InternetStatusContext.jsx'

const Layout = ({children}) => {

  const {isOnline} = useContext(Internet_Status_Context);

  return (
    <>
    <div className='w-[100%]'>
      <Header/>
    {isOnline&&<main>{children}</main>}
    <Footer/>
    </div>
    </>
  )
}

export default Layout