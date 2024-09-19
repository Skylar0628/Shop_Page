import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NotFound = () => {
   const navigate = useNavigate();
    useEffect(()=>{
       setTimeout(() => {
        navigate('/')
       }, 2500);
    },[])

    return (<>
     <div className='container'>
      <div className='row justify-content-center'>
        <div
          className='col-md-6 bg-white py-5'
          style={{minHeight: 'calc(100vh - 56px - 76px)'}}
        >
          <div className='d-flex justify-content-between'>
            <h2 className='mt-2'>購物車目前沒有項目</h2>
          </div>
      
      
          <Link
            to='/Home'
            className='btn btn-dark w-100 mt-4 rounded-0 py-3'
          >
            回到首頁
          </Link>
        </div>
      </div>
    </div>
  </> )
}

export default NotFound
