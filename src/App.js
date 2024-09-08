import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCoupon from './pages/admin/AdminCoupon';
import AdminOrders from './pages/admin/AdminOrders';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Products from './pages/front/Products';
import ProductDetail from './pages/front/ProductDetail';
import Cart from './pages/front/Cart';


export const ApiPath = process.env.REACT_APP_API_PATH;

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FrontLayout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='product/:id' element={<ProductDetail/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Dashboard/>}>
         <Route path='products' element={<AdminProducts/>}/>
         <Route path='coupons' element={<AdminCoupon/>}/>
         <Route path='orders' element={<AdminOrders/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
