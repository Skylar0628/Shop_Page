import axios from 'axios';
import React, { useState } from 'react'
import { ApiPath } from '../App';


const ProductModal = ({closeProductModal, getProjects}) => {
 const [ tempData, setTempData ] = useState({
    "title": "",
    "category": "",
    "origin_price": 100,
    "price": 300,
    "unit": "",
    "description": "",
    "content": "",
    "is_enabled": 1,
    "imageUrl": "",
 });
 
 const handleChange = (e)=> {
   const { name, value } = e.target;
   if(name === "is_enabled"){
    setTempData({
        ...tempData,
        [name]: +e.target.checked
    })
   } else {
      setTempData({
    ...tempData,
    [name]:  name==="origin_price" || name === "price"? Number(value) :value
   })
   }
 
 };

 const Submit = async() => {
   try {
    const res = await axios.post(`/v2/api/${ApiPath}/admin/product`, {data: tempData});
    closeProductModal();
    getProjects();
   } catch (error) {
    console.log("error",error);
   }
 }

  return (
    <div
    className='modal fade'
    id='productModal'
    tabIndex='-1'
    aria-labelledby='exampleModalLabel'
    aria-hidden='true'
  >
 
    <div className='modal-dialog modal-lg'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1 className='modal-title fs-5' id='exampleModalLabel'>
            Modal title
            建立新商品
          </h1>
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={closeProductModal}
          ></button>
       
        </div>
        <div className='modal-body'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='form-group mb-2'>
                <label className='w-100' htmlFor='image'>
                  輸入圖片網址
                  <input
                    type='text'
                    name='imageUrl'
                    id='image'
                    placeholder='請輸入圖片連結'
                    className='form-control'
                    onChange={handleChange}
                    value={tempData.imageUrl}
                  />
                </label>
              </div>
              <div className='form-group mb-2'>
                <label className='w-100' htmlFor='customFile'>
                  或 上傳圖片
                  <input
                    type='file'
                    id='customFile'
                    className='form-control'
                  />
                </label>
              </div>
              <img src='' alt='' className='img-fluid' />
            </div>
            <div className='col-sm-8'>
              <div className='form-group mb-2'>
                <label className='w-100' htmlFor='title'>
                  標題
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='請輸入標題'
                    className='form-control'
                    onChange={handleChange}
                    value={tempData.title}
                  />
                </label>
              </div>
              <div className='row'>
                <div className='form-group mb-2 col-md-6'>
                  <label className='w-100' htmlFor='category'>
                    分類
                    <input
                      type='text'
                      id='category'
                      name='category'
                      placeholder='請輸入分類'
                      className='form-control'
                      onChange={handleChange}
                      value={tempData.category}
                    />
                  </label>
                </div>
                <div className='form-group mb-2 col-md-6'>
                  <label className='w-100' htmlFor='unit'>
                    單位
                    <input
                      type='unit'
                      id='unit'
                      name='unit'
                      placeholder='請輸入單位'
                      className='form-control'
                      onChange={handleChange}
                      value={tempData.unit}
                    />
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='form-group mb-2 col-md-6'>
                  <label className='w-100' htmlFor='origin_price'>
                    原價
                    <input
                      type='number'
                      id='origin_price'
                      name='origin_price'
                      placeholder='請輸入原價'
                      className='form-control'
                      onChange={handleChange}
                      value={tempData.origin_price}
                    />
                  </label>
                </div>
                <div className='form-group mb-2 col-md-6'>
                  <label className='w-100' htmlFor='price'>
                    售價
                    <input
                      type='number'
                      id='price'
                      name='price'
                      placeholder='請輸入售價'
                      className='form-control'
                      onChange={handleChange}
                      value={tempData.price}
                    />
                  </label>
                </div>
              </div>
              <hr />
              <div className='form-group mb-2'>
                <label className='w-100' htmlFor='description'>
                  產品描述
                  <textarea
                    type='text'
                    id='description'
                    name='description'
                    placeholder='請輸入產品描述'
                    className='form-control'
                    onChange={handleChange}
                    value={tempData.description}
                  />
                </label>
              </div>
              <div className='form-group mb-2'>
                <label className='w-100' htmlFor='content'>
                  說明內容
                  <textarea
                    type='text'
                    id='content'
                    name='content'
                    placeholder='請輸入產品說明內容'
                    className='form-control'
                    onChange={handleChange}
                    value={tempData.content}
                  />
                </label>
              </div>
              <div className='form-group mb-2'>
                <div className='form-check'>
                  <label
                    className='w-100 form-check-label'
                    htmlFor='is_enabled'
                    name='is_enabled'
                  >
                    是否啟用
                    <input
                      type='checkbox'
                      id='is_enabled'
                      name='is_enabled'
                      placeholder='請輸入產品說明內容'
                      className='form-check-input'
                      onChange={handleChange}
                      value={tempData.is_enabled}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-body'>...</div>
        <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={closeProductModal}
          >
            Close
            關閉
          </button>
          <button type='button' className='btn btn-primary'>
            Save changes
            </button>
          <button type='button' className='btn btn-primary' onClick={Submit}>
            儲存
          </button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default ProductModal
