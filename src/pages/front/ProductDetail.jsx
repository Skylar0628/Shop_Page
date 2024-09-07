import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { ApiPath } from '../../App';
import axios from 'axios';


const ProductDetail = () => {
const [product,setProduct] = useState({});
  const {id} = useParams();
  const getProduct = async(id)=> {
   await axios.get(`/v2/api/${ApiPath}/product/${id}`)
   .then(res => {
    const {product} = res.data;
    setProduct(product);
   })
   .catch(err=> {
    console.log(err)
   })
  };

useEffect(()=>{
    getProduct(id)
},[id]);


  return (  <div className='container'>
    <div
      style={{
        minHeight: '400px',
        backgroundImage:
          `url(${product.imageUrl})`,
        backgroundPosition: 'center center',
      }}
    ></div>
    <div className='row justify-content-between mt-4 mb-7'>
      <div className='col-md-7'>
        <h2 className='mb-0'>{product.title}</h2>
        <p className='fw-bold'>NT$ {product.price}</p>
        <p>
          {product.content}
        </p>
        <div className='my-4'>
          <img
            src={product.imageUrl}
            alt=''
            className='img-fluid mt-4'
          />
          
        </div>
      </div>
      <div className='col-md-4'>
        <div className='input-group mb-3 border mt-3'>
          <div className='input-group-prepend'>
            <button
              className='btn btn-outline-dark rounded-0 border-0 py-3'
              type='button'
              id='button-addon1'
            >
              <i className='fas fa-minus'></i>
            </button>
          </div>
          <input
            type='text'
            className='form-control border-0 text-center my-auto shadow-none'
            placeholder=''
            aria-label='Example text with button addon'
            aria-describedby='button-addon1'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-dark rounded-0 border-0 py-3'
              type='button'
              id='button-addon2'
            >
              <i className='fas fa-plus'></i>
            </button>
          </div>
        </div>
        <a
          href='./checkout.html'
          className='btn btn-dark btn-block rounded-0 py-3'
        >
          Lorem ipsum
        </a>
      </div>
    </div>
  </div>)
}

export default ProductDetail
