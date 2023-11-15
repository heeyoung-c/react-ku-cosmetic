import { Outlet } from 'react-router-dom'

import React from 'react'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  )
}

export default RootLayout
