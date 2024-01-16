import React from 'react'
import { Footer, Header } from './Components/index'
import { Outlet } from 'react-router-dom'

function Routes() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Routes