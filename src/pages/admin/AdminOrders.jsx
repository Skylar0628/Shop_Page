import React, { useEffect, useRef, useState } from 'react'
import { ApiPath } from '../../App';
import axios from 'axios';
import { Modal } from 'bootstrap';
import OrderModal from '../../components/OrderModal';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';
import Swal from 'sweetalert2'
import DeleteItemModal from '../../components/DeleteItemModal';


const AdminOrders = () => {
  const [ orders, setOrders ] = useState({});
  const [ pagination, setPagination ] = useState({});
  const [ tempOrder, setTempOrder ] = useState({});
  const [ temProduct, setTemProduct ] = useState({});  
  const [ isLoading, setIsLoading ] = useState(false);

  const orderRef = useRef(null);

  const getOrders = async(page=1) => {
    const url = `/v2/api/${ApiPath}/admin/orders?page=${page}` 
    const res = await axios.get(url)
    setOrders(res.data.orders);
    setPagination(res.data.pagination);
  };

  useEffect(()=>{
    getOrders()
  },[]);

   const openOrderModal = (order)=> {
    setTempOrder(order);
    orderRef.current.show();
   };
   const closeOrderModal = ()=> {
    orderRef.current.hide();
   };
 
   // 刪除單一Order
   const deleteOrder = async(id)=> {
    const url = `/v2/api/${ApiPath}/admin/order/${id}`
    try {
      await axios.delete(url);
      getOrders();
    } catch (error) {
      console.log(error);
    };
   };

   // 刪除所有Orders
   const deleteOrdersAll = async()=> {
    const url = `/v2/api/${ApiPath}/admin/orders/all`
    return await axios.delete(url);
   };

   useEffect(()=>{
    orderRef.current = new Modal('#orderModal',{
      backdrop: 'static'
    });
   },[]);

   //刪除所有order alert
   const deleteOrderAll = ()=> {
    Swal.fire({
      title: "確認刪除所有訂單項目?",
      text: "刪除後將無法復原!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "確定刪除",
      cancelButtonText: "取消"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrdersAll()
        .then(()=>{
          Swal.fire({
            title: "刪除成功!",
            text: "完成刪除品項.",
            icon: "success"
          });
        }).then(()=>{
          getOrders();
        })
        .catch(error=>{
          Swal.fire({
            title: "刪除失敗!",
            text: error.message,
            icon: "error"
          });
        })
      }
    });
   };

   
  return (
    <div className='p-3'>
      {isLoading && <Loading/>}
    <OrderModal
      getOrders={getOrders}
      closeOrderModal={closeOrderModal}
      tempOrder={tempOrder}
    />
    <div className='d-flex align-items-center justify-content-between'>
     <h3>訂單列表</h3>  
     <button type='button' className='btn btn-danger btn-sm' onClick={deleteOrderAll}>刪除所有訂單</button>
    </div>
   
    <hr />
    <div className='text-end'>
     
    </div>
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>訂單 id</th>
          <th scope='col'>購買用戶</th>
          <th scope='col'>訂單金額</th>
          <th scope='col'>付款狀態</th>
          <th scope='col'>付款日期</th>
          <th scope='col'>留言訊息</th>
          <th scope='col'>編輯</th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 ? (orders.map((order) => {
          return (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                {order.user?.name}
                {order.user?.email}
              </td>
              <td>${order.total}</td>
              <td>
                {order.is_paid ? (
                  <span className='text-success fw-bold'>付款完成</span>
                ) : (
                  '未付款'
                )}
              </td>
              <td>
                {order.paid_date
                  ? new Date(order.paid_date * 1000).toLocaleString()
                  : '未付款'}
              </td>
              <td>{order.message}</td>

              <td>
                <button
                  type='button'
                  className='btn btn-primary btn-sm me-2'
                  onClick={() => {openOrderModal(order)}}
                >
                  查看
                </button>
                <button
                 type='button'
                 className='btn btn-danger btn-sm'
                 onClick={()=>DeleteItemModal(order, deleteOrder, getOrders)}
                >
                  刪除
                </button>
              </td>
            </tr>
          );
        })):(
          <p>請稍後</p>
        )}
      
      </tbody>
    </table>
    <Pagination pagination={pagination} getProjects={getOrders} />

  </div>
  )
}

export default AdminOrders
