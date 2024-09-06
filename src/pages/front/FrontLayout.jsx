import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const FrontLayout = () => {
  return (<>
     <Navbar/>
      <Outlet></Outlet>
     <Footer/>
  </>)
}

export default FrontLayout
