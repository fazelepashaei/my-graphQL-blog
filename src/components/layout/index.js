import Footer from './footer'
import Header from './Header'
import React from 'react'
function Layout({children}) {
  return (
    <>
       <Header/>
       {children}
       <Footer/>
    </>
 
  )
}

export default Layout