import React,{useState} from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import { ApiPath } from '../../App';
import axios from 'axios';


const Cart = () => {
  const {cartData, getCart} = useOutletContext();
  const [loadingItems, setLoadingItem] = useState([])

  const removeCartItem = async(id)=> {
    try {
      const res = await axios.delete(`/v2/api/${ApiPath}/cart/${id}`)
      console.log('success',res);
      getCart();
    } catch (error) {
      console.log('error',error);
    }
  };
 
  const editCartItem = async(item, quantity)=> {
    const data = {
        "data": {
          "product_id":item.product_id,
          "qty": quantity
        }
      }
    setLoadingItem([...loadingItems, item.id])
   try {
    const res =  await axios.put(`/v2/api/${ApiPath}/cart/${item.id}`,data);
    setLoadingItem(loadingItems.filter((lodadingObject)=> lodadingObject !== item.id))
    getCart();
    console.log(res);
   } catch (error) {
    console.log(error);
   }
  }

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
                  <button
                    type='button'
                    className='position-absolute btn'
                    style={{ top: '16px', right: '16px' }}
                    onClick={()=> removeCartItem(item.id)}
                  >
                  {/* 移除品項 */}
                  <i className="bi bi-x"></i>
                  </button>
                  <p className='mb-0 fw-bold'>{item.product.title}</p>
                  <p className='mb-1 text-muted' style={{ fontSize: '14px' }}>
                    {item.product.content}
                  </p>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='input-group w-50 align-items-center'>
                    <select
                        name=''
                        className='form-select'
                        id=''
                        disabled={loadingItems.includes(item.id)}
                        value={item.qty}
                        onChange={(e) => {
                            editCartItem(item, e.target.value * 1);
                          }}
                      >
                        {[...new Array(20)].map((i, num) => {
                          return (
                            <option value={num + 1} key={num}>
                              {num + 1}
                            </option>
                          );
                        })}
                      </select>
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
          <Link
            to='/Checkout'
            className='btn btn-dark w-100 mt-4 rounded-0 py-3'
          >
            確認餐點正確
          </Link>
        </div>
      </div>
    </div>
  </> )
}

export default Cart
