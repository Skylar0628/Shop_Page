import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ApiPath } from '../App'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [ data, setData ] =useState({
    username: "example@test.com",
    password: "example"
  });

  const Navigate = useNavigate();

  const handleChange = (e)=> {
     const { name, value } = e.target;
     setData({
        ...data,
        [name]: value
     });
  };

  const onSubmit = async(e)=>{
     const res = await axios.post(`/v2/admin/signin`,data)
     const { token, expried } = res.data;
     // 登入 儲存token
     document.cookie = `hexToken=${token}; expires=${new Date(expried)}`;
     if(res.data.success){
      Navigate('admin/projects');
     }
  };

  return (
    <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6 p-5" style={{ border:'1px solid #000', borderRadius:'20px' }}>
        <h2>登入帳號</h2>

        <div className="alert alert-danger" role="alert">
          錯誤訊息
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label w-100">
            Email
            <input onChange={handleChange} id="email" className="form-control" name="username" type="email" placeholder="請輸入信箱.." />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label w-100">
            密碼
            <input onChange={handleChange} type="password" className="form-control"  name="password" id="password" placeholder="請輸入密碼..." />
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={onSubmit}>登入</button>
      </div>
    </div>
  </div>
  )
}


export default Login
