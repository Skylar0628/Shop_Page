import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/all.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';   // 引入 Bootstrap 的 ICon樣式
import 'bootstrap/dist/css/bootstrap.min.css';       // 引入 Bootstrap 的 CSS
import { HashRouter } from 'react-router-dom';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
     <App />
    </HashRouter>
);

reportWebVitals();
