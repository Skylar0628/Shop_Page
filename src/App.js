import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

export const ApiPath = process.env.REACT_APP_API_PATH;

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
