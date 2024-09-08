import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { ApiPath } from '../../App';
import axios from 'axios';


const ProductDetail = () => {
const [product,setProduct] = useState({});
const [cartQty, setCartQty] = useState(1);
const [isLoding, setIsLoding] = useState(false);
  const {id} = useParams();
  const getProduct = async(id)=> {
   await axios.get(`/v2/api/${ApiPath}/product/${id}`)
   .then(res => {
    const {product} = res.data;
    setProduct(product);
    setCartQty(1);
   })
   .catch(err=> {
    console.log(err);
    setCartQty(1);
   })
  };

useEffect(()=>{
    getProduct(id)
},[id]);

const addToCart = async()=> {
  const data =  {
    "data": {
      "product_id": id,
      "qty": cartQty
    }
  };
  const url = `/v2/api/${ApiPath}/cart`
  setIsLoding(true)
  await axios.post(url, data)
  .then(res=> {
    console.log(res)
    setIsLoding(false);
  })
  .catch(err=> {
    console.log(err)
    setIsLoding(false);
  })
}


  return (  <div className='container'>
    <div
      style={{
        minHeight: '400px',
        backgroundImage:
          `url(${product.imageUrl})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
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
             onClick={()=> setCartQty(pre => pre ===1? pre: pre-1)}
            >
              <i class="bi bi-dash"></i>
            </button>
          </div>
          <input
            type='number'
            className='form-control border-0 text-center my-auto shadow-none'
            placeholder=''
            aria-label='Example text with button addon'
            aria-describedby='button-addon1'
            readOnly
            value={cartQty}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-dark rounded-0 border-0 py-3'
              type='button'
              id='button-addon2'
              onClick={()=> {setCartQty((pre)=>(pre+ 1 ))}}

            >
                <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <button
          href='./checkout.html'
          className='btn btn-dark w-100 rounded-0 py-3'
          onClick={addToCart}
          disabled={isLoding}
        >
          加入購物車
          </button>
      </div>
    </div>
  </div>)
}

export default ProductDetail
