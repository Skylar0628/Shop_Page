import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ApiPath } from '../App';
import { json } from 'react-router-dom';


const CouponsModal = ({closeCouponsModal, type, temProduct, getCoupon}) => {
  const [tempData, setTempData] = useState({
      "title": "",
      "is_enabled": 1,
      "percent": 0,
      "due_date": 0,
      "code": ""
  });

  const handleChange = (e)=> {
    const {name, value} = e.target;
    if(name === "is_enabled"){
      setTempData({
          ...tempData,
          [name]: +e.target.checked
      })
     } else if (name === "due_date") {
      const unixTimestamp = Math.floor(new Date(value).getTime() / 1000);
      setTempData({
        ...tempData,
        [name]: unixTimestamp
      })
     } else {
        setTempData({
      ...tempData,
      [name]:  name==="percent"? Number(value) :value
     })
     }
  };

  const onSubmit = async()=> {
    try {
      let api = `/v2/api/${ApiPath}/admin/coupon`;
      let method = "post";
      if (type === "edit"){
        api = `/v2/api/${ApiPath}/admin/coupon/${temProduct.id}`
        method = "put"
      }
      await axios[method](api, {data: tempData})
      closeCouponsModal();
      getCoupon();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(type === "create"){
      setTempData({
      "title": "",
      "is_enabled": 1,
      "percent": 0,
      "due_date": 0,
      "code": ""
    })} else {
      setTempData(temProduct)
    }
  },[type, temProduct])

  return (
    <div
      className='modal fade'
      tabIndex='-1'
      id='couponsModal'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              {type === 'create'? "建立優惠券" : "編輯優惠券"}
            </h1>
            <button
              type='button'
              className='btn-close'
              aria-label='Close'
              onClick={closeCouponsModal}
            />
          </div>
          <div className='modal-body'>
            <div className='mb-2'>
              <label className='w-100' htmlFor='title'>
                標題
                <input
                  type='text'
                  id='title'
                  placeholder='請輸入標題'
                  name='title'
                  className='form-control mt-1'
                  onChange={handleChange}
                  value={tempData.title}
                />
              </label>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-2'>
                <label className='w-100' htmlFor='percent'>
                  折扣（%）
                  <input
                    type='text'
                    name='percent'
                    id='percent'
                    placeholder='請輸入折扣（%）'
                    className='form-control mt-1'
                    onChange={handleChange}
                    value={tempData.percent}
                  />
                </label>
              </div>
              <div className='col-md-6 mb-2'>
                <label className='w-100' htmlFor='due_date'>
                  到期日
                  <input
                    type='date'
                    id='due_date'
                    name='due_date'
                    placeholder='請輸入到期日'
                    className='form-control mt-1'
                    onChange={handleChange}
                    value={new Date(tempData.due_date * 1000).toISOString().split('T')[0]}  // 將 Unix Timestamp 轉換回日期格式
                  />
                </label>
              </div>
              <div className='col-md-6 mb-2'>
                <label className='w-100' htmlFor='code'>
                  優惠碼
                  <input
                    type='text'
                    id='code'
                    name='code'
                    placeholder='請輸入優惠碼'
                    className='form-control mt-1'
                    onChange={handleChange}
                    value={tempData.code}
                  />
                </label>
              </div>
            </div>
            <label className='form-check-label' htmlFor='is_enabled'>
              <input
                className='form-check-input me-2'
                type='checkbox'
                id='is_enabled'
                name='is_enabled'
                onChange={handleChange}
                checked={tempData.is_enabled}
              />
              是否啟用
            </label>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={closeCouponsModal}
            >
              關閉
            </button>
            <button type='button' className='btn btn-primary' onClick={onSubmit}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponsModal
