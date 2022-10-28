import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const BaseLayout = ({children}) => {
  return (
    <>
        <NavBar />
            <main className="h-auto">{children}</main>
        <Footer/>
    </>
  )
}

export default BaseLayout