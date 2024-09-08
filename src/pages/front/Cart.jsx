import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cart = () => {
  const {cartData} = useOutletContext();
  return (<>
     <div className='container'>
      <div className='row justify-content-center'>
        <div
          className='col-md-6 bg-white py-5'
          style={{minHeight: 'calc(100vh - 56px - 76px)'}}
        >
          <div className='d-flex justify-content-between'>
            <h2 className='mt-2'>您的餐點</h2>
          </div>
          { cartData?.carts?.map((item) => {
            return (
              <div className='d-flex mt-4 bg-light object-cover' key={item.id}>
                <img
                  src={item.product.imageUrl}
                  alt=''
                  className='object-cover'
                  style={{
                    width: '120px',
                  }}
                />
                <div className='w-100 p-3 position-relative'>
                  <a
                    href='#'
                    className='position-absolute'
                    style={{ top: '16px', right: '16px' }}
                  >
                  <i className="bi bi-x"></i>
                  </a>
                  <p className='mb-0 fw-bold'>{item.product.title}</p>
                  <p className='mb-1 text-muted' style={{ fontSize: '14px' }}>
                    {item.product.content}
                  </p>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='input-group w-50 align-items-center'>
                      <div className='input-group-prepend pe-1'>
                        <a href='#'>
                          {' '}
                          <i className='fas fa-minus'></i>
                        </a>
                      </div>
                      <input
                        type='text'
                        className='form-control border-0 text-center my-auto shadow-none bg-light px-0'
                        placeholder=''
                        aria-label='Example text with button addon'
                        aria-describedby='button-addon1'
                      />
                      <div className='input-group-append ps-1'>
                        <a href='#'>
                          <i className='fas fa-plus'></i>
                        </a>
                      </div>
                    </div>
                    <p className='mb-0 ms-auto'>NT${item.final_total}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='d-flex justify-content-between mt-4'>
            <p className='mb-0 h4 fw-bold'>總金額</p>
            <p className='mb-0 h4 fw-bold'>NT$ ${cartData.final_total}</p>
          </div>
          <a
            href='./checkout.html'
            className='btn btn-dark w-100 mt-4 rounded-0 py-3'
          >
            確認餐點正確
          </a>
        </div>
      </div>
    </div>
  </> )
}

export default Cart
