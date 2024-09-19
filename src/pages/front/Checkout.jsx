import React, { useEffect } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ApiPath } from '../../App'
import axios from 'axios'


const Checkout = () => {
  const { cartData,getCart } = useOutletContext();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    if(cartData.carts.length === 0){
      navigate(`/R%$^#$`);
      return;
    }
    const { address, email, name, tel } = data;
    const orderData = {
      "data": {
        "user": {
          "name": name,
          "email": email,
          "tel": tel,
          "address": address
        },
        "message": "string"
      }
    };
    const url = `/v2/api/${ApiPath}/order`
    const res = await axios.post(url, orderData);
    getCart();
    navigate(`/success/${res.data.orderId}`);
  }


  return (
    <div className='bg-light pt-5 pb-7'>
      <div className='container'>
        <div className='row justify-content-center flex-md-row flex-column-reverse'>
          <form className='col-md-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='bg-white p-4'>
              <h4 className='fw-bold'>外送資料</h4>
              <div className='mb-2'>
                <label
                  htmlFor='ContactMail'
                  className='text-muted mb-0 form-lable'
                >
                  Email
                </label>
                <input
                  type='email'
                  className='form-control rounded-0'
                  id='ContactMail'
                  aria-describedby='emailHelp'
                  placeholder='請輸入email...'
                  {...register('email', {
                    required: true,
                    patter: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: '請輸入有效的email格式'
                    }
                  })}
                />
                {errors.email && <p className='text-danger'>emai為必填項目</p>}
              </div>
              <div className='mb-2'>
                <label
                  htmlFor='ContactName'
                  className='text-muted mb-0 form-label'
                >
                  姓名
                </label>
                <input
                  type='text'
                  className='form-control rounded-0'
                  id='ContactName'
                  placeholder='請輸入姓名...'
                  {...register('name', {
                    required: true,
                  })}
                />
                {errors.name && <p className='text-danger'>姓名為必填項目</p>}
              </div>
              <div className='mb-2'>
                <label
                  htmlFor='ContactPhone'
                  className='text-muted mb-0 form-label'
                >
                  聯絡電話
                </label>
                <input
                  type='text'
                  className='form-control rounded-0'
                  id='ContactPhone'
                  placeholder='0933-123-123'
                  {...register('tel', { required: true })}
                />
                {errors.phone && <p className='text-danger'>電話號碼為必填項目</p>}
              </div>
              <div className='mb-2'>
                <label
                  htmlFor='inputCity'
                  className='text-muted mb-0 form-label'
                >
                  外送地址
                </label>
                <input
                  type='text'
                  className='form-control rounded-0 mt-1'
                  id='inputCity'
                  placeholder='address'
                  {...register('address', { required: true })}
                />
                {errors.address && <p className='text-danger'>地址為必填項目</p>}
              </div>
            </div>
            <div className='d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100'>
              <Link className='text-dark mt-md-0 mt-3' to='/cart'>
                <i className='bi bi-chevron-left me-2'></i> 繼續點餐
              </Link>
              <button
                type='submit'
                className='btn btn-dark py-3 px-7 rounded-0'
              >
                送出表單
              </button>
            </div>
          </form>

          <div className='col-md-4'>
            <div className='border p-4 mb-4'>
              <h4 className='mb-4'>選購餐點</h4>
              {cartData && cartData.carts && cartData.carts.length > 0 ? (
                cartData.carts.map((item, index) => (
                  <div className='d-flex' key={index}>
                    <img
                      src={item.product.imageUrl}
                      alt='product_img'
                      className='me-2'
                      style={{ width: '48px', height: '48px', objectFit:'cover' }}
                    />
                    <div className='w-100'>
                      <div className='d-flex justify-content-between fw-bold'>
                        <p className='mb-0'>{item.product.title}</p>
                        <p className='mb-0'>x{item.qty}</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-muted mb-0'>
                          <small>NT$ {item.product.price}</small>
                        </p>
                        <p className='mb-0'>NT$ {item.product.price * item.qty}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>請稍等</p>
              )}
              <div className='d-flex justify-content-between mt-4'>
                <p className='mb-0 h4 fw-bold'>總金額</p>
                <p className='mb-0 h4 fw-bold'>NT$ {cartData.final_total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
