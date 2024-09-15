import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [ data, setData ] =useState({
    username: "",
    password: ""
  });
  const [ loginState, setLoginState ] = useState({});

  const Navigate = useNavigate();

  const handleChange = (e)=> {
     const { name, value } = e.target;
     setData({
        ...data,
        [name]: value
     });
  };

  const onSubmit = async()=>{
    try {
      const res = await axios.post(`/v2/admin/signin`,data)
      const { token, expried } = res.data;
      // 登入 儲存token
      document.cookie = `hexToken=${token}; expires=${new Date(expried)}`;
      if(res.data.success){
        Navigate('/admin/products');
      }
    } catch (error) {
      setLoginState(error.message)
    }  
  }; 

  return (
    <div className="container-fluid">
      <form className='mx-auto'>
        <h4 className='mb-5'>登入帳號</h4>
        <div className={`alert alert-danger ${loginState.length? "d-block": "d-none"}`} role="alert">
          錯誤訊息
        </div>

        <div classNamw="mb-4 mt-5">
          <label for="emaill" className="form-label w-100">帳號
          <input onChange={handleChange} type="email" className="form-control" id="emaill" name='username' aria-describedby="emailHelp" placeholder='請輸入使用者帳號...'/>
          </label>
        </div>

        <div className="mb-4">
          <label for="password" className="form-label w-100">密碼
          <input onChange={handleChange} type="password" className="form-control" name='password' id="password" placeholder='請輸入使用者密碼...'/>
          </label>
        </div>
       
        <button type="button" className="btn btn-primary mb-3 p-3 Login_btn"  onClick={onSubmit}>登入</button>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>

        <div id="emailHelp" className="form-text">忘記密碼?</div>
      </form>
    {/* <div className="row justify-content-center" style={{backgroundColor:'white', height:'100vh', alignItems:'center'}}>
      <div className="col-md-6 p-5" style={{ border:'1px solid #000', borderRadius:'20px', height:'450px' }}>
        <h2>登入帳號</h2>

        
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
    </div> */}
  </div>
  )
}


export default Login
