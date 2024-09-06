import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'bootstrap';
import axios from 'axios';
import { ApiPath } from '../../App';
import CouponsModal from '../../components/CouponsModal';
import DeleteModal from '../../components/DeleteModal';
import Pagination from '../../components/Pagination';


const AdminCoupon = () => {
  const [ coupons, setCoupons ] = useState([]);
  const [ pagination, setPagination ] = useState({});
  const [ type,setType ] = useState('create');
  const [ temProduct, setTemProduct ] = useState({});
  const couponRef = useRef(null);
  const deleteModal = useRef(null);
  const getCoupon = async(page=1)=> {
    const res = await axios.get(`/v2/api/${ApiPath}/admin/coupons?page=${page}`)
    try {
      const { coupons, pagination } = res.data;
      setCoupons(coupons);
      setPagination(pagination);
    } catch (error) {
      console.log(error)
    }
  }

  const openCouponsModal = (type, temProduct) => {
    couponRef.current.show();
    setType(type);
    setTemProduct(temProduct);
  };
  const closeCouponsModal = () => {
    couponRef.current.hide();
  };
  const openDeleteProductModal = (temProduct)=> {
    deleteModal.current.show();
    setTemProduct(temProduct);
  }
  const closeDeleteProductModal = ()=> {
    deleteModal.current.hide();
  }
  const deleteProduct = async(id)=> {
    try {
      await axios.delete(`/v2/api/${ApiPath}/admin/coupon/${id}`);
      closeDeleteProductModal();
      getCoupon();
   } catch (error) {
     console.log(error);
   }
  }

  useEffect(()=>{
    couponRef.current = new Modal('#couponsModal',{
       backdrop: 'static'
    });
    deleteModal.current = new Modal('#deleteModal',{
      backdrop: 'static' 
    });
    getCoupon();
  },[])

  return (
    <div className='p-3'>
      <CouponsModal getCoupon={getCoupon} closeCouponsModal={closeCouponsModal} type={type} temProduct={temProduct}/>
      <DeleteModal deleteProduct={deleteProduct} closeDeleteProductModal={closeDeleteProductModal} temProduct={temProduct}/>
    <h3>優惠券列表</h3>
    <hr />
    <div className='text-end'>
      <button type='button' className='btn btn-primary btn-sm' onClick={()=> {openCouponsModal('create', {})}}>
        建立優惠券
      </button>
    </div>
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>標題</th>
          <th scope='col'>折扣</th>
          <th scope='col'>到期日</th>
          <th scope='col'>優惠碼</th>
          <th scope='col'>啟用狀態</th>
          <th scope='col'>編輯</th>
        </tr>
      </thead>
      <tbody>
      {coupons.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.percent}</td>
                <td>{new Date(product.due_date).toDateString()}</td>
                <td>{product.code}</td>
                <td>{product.is_enabled ? '啟用' : '未啟用'}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm'
                    onClick={()=>{openCouponsModal('edit', product)}}
                  >
                    編輯
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-danger btn-sm ms-2'
                    onClick={()=> {openDeleteProductModal(product)}}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
    <Pagination getProjects={getCoupon} pagination={pagination}/>  
  </div>
  )
}

export default AdminCoupon
