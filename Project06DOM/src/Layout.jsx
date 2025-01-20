import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
