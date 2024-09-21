import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ApiPath } from '../../App'
import axios from 'axios'


const FrontLayout = () => {
  const [ cartData, setCartData ] = useState({});
  const getCart = async()=> {
    const url = `/v2/api/${ApiPath}/cart`
    try {
      const res = await axios.get(url);
      setCartData( res.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getCart();
  },[]);

  return (<>
     <Navbar cartData={cartData}/>
      <Outlet context={{getCart, cartData}}></Outlet> 
     <Footer/>
  </>)
}

export default FrontLayout
