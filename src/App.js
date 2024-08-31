import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/AdminProducts';


export const ApiPath = process.env.REACT_APP_API_PATH;

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={<Dashboard/>}>
         <Route path='projects' element={<AdminProducts/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
