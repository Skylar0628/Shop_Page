import React, { useContext, useEffect, useReducer } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import Message from '../../components/Message';
import { initState, messageContext, messageReducer } from '../../store/MessageStroe';

const Dashboard = () => {
  const reduser = useReducer(messageReducer,initState)
  const Navigate = useNavigate();
  const loguot = ()=> {
    document.cookie = `hexToken=;`
    Navigate('/');
  };

   // 取出token
   const token = document.cookie
   .split("; ")
   .find((row) => row.startsWith("hexToken="))
   ?.split("=")[1];
   axios.defaults.headers.common['Authorization'] = token;

    useEffect(()=>{
    if(!token){
     return Navigate('/')
    }
    (async()=>{
      try {
        await axios.post(`/v2/api/user/check`)
      } catch (error) {
       if(!error.response.data.success){
        Navigate('/')
       }
      }
    })()
    },[token, Navigate]);
  

  return (
    <messageContext.Provider value={reduser}>
        <Message/>
        <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container-fluid'>
          <p className='text-white mb-0'>HEX EATS 後台管理系統</p>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <button type='button' className='btn btn-sm btn-light' onClick={loguot}>
                  登出
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='d-flex' style={{ minHeight: 'calc(100vh - 56px)' }}>
        <div className='bg-light' style={{ width: '200px' }}>
          <ul className='list-group list-group-flush'>
            <Link
              className='list-group-item list-group-item-action py-3'
              to='/admin/products'
            >
              <i className='bi bi-cup-fill me-2' />
              產品列表
            </Link>
            <Link
              className='list-group-item list-group-item-action py-3'
              to='/admin/coupons'
            >
              <i className='bi bi-ticket-perforated-fill me-2' />
              優惠卷列表
            </Link>
            <Link
              className='list-group-item list-group-item-action py-3'
              to='/admin/orders'
            >
              <i className='bi bi-receipt me-2' />
              訂單列表
            </Link>
          </ul>
        </div>
        <div className='w-100'>
          {token && <Outlet/>}
        </div>
      </div>
    </messageContext.Provider>
  )
}

export default Dashboard
