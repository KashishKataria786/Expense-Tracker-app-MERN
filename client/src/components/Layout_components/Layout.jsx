
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Layout = ({children}) => {
  return (
    <>
    <div className='w-[100%]'>
      <Header/>
    <main>{children}</main>
    <Footer/>
    </div>
    </>
  )
}

export default Layout