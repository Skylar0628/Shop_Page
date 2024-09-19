import axios from 'axios';
import React,{useEffect, useRef, useState} from 'react'
import { ApiPath } from '../../App';
import ProductModal from '../../components/ProductModal';
import { Modal } from 'bootstrap';
import Pagination from '../../components/Pagination';
import DeleteItemModal from '../../components/DeleteItemModal';

const AdminProducts = () => {
  const [ products, setProducts ] = useState([]);
  const [ pagination, setPagination ] = useState({});
  const [ type,setType ] = useState('create');
  const [ temProduct, setTemProduct ] = useState({});
  const productModal = useRef(null);


  const openProductModal = (type, temProduct)=> {
    productModal.current.show();
    setType(type);
    setTemProduct(temProduct);
  };
  const closeProductModal = ()=> {
    productModal.current.hide();
  };

  const deleteProduct = async(id)=> {
    try {
       await axios.delete(`/v2/api/${ApiPath}/admin/product/${id}`);
       getProjects();
    } catch (error) {
      console.log(error);
    }
  };
  
    useEffect(()=>{
        productModal.current = new Modal('#productModal',{
            backdrop: 'static'
        });
        getProjects();
    },[]);

    const getProjects = async(page=1)=> {
        const res = await axios.get(`/v2/api/${ApiPath}/admin/products?page=${page}`)
        try {
          const {products} = res.data;
          const {pagination} = res.data;
          setProducts(products);
          setPagination(pagination);
        } catch (error) {
          console.error(error)
        }
    };


  return (
    <div className='p-3'>
      <ProductModal 
        closeProductModal={closeProductModal} 
        getProjects={getProjects}
        type={type}
        temProduct={temProduct}
      />
      <h3>產品列表</h3>
      <hr />
      <div className='text-end'>
        <button type='button' className='btn btn-primary btn-sm' onClick={()=> {openProductModal('create',{})}}>
          建立新商品
        </button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>分類</th>
            <th scope='col'>名稱</th>
            <th scope='col'>售價</th>
            <th scope='col'>啟用狀態</th>
            <th scope='col'>編輯</th>
          </tr>
        </thead>
        <tbody>
         {products.map((item, index)=>(
             <tr key={index}>
             <td>{item.category}</td>
             <td>{item.title}</td>
             <td>{item.price}</td>
             <td>{item.is_enabled? "啟用":"未啟用" }</td>
             <td>
                 <button 
                  type='button' className='btn btn-primary btn-sm' 
                  onClick={()=> {openProductModal('edit',item)}}>
                 編輯
                 </button>
                 <button
                 type='button'
                 className='btn btn-outline-danger btn-sm ms-2'
                 onClick={()=> DeleteItemModal(item, deleteProduct, getProjects)}
                 >
                 刪除
                 </button>
             </td>
             </tr>  
          ))}
          
        </tbody>
      </table>
     <Pagination getProjects={getProjects} pagination={pagination}/>  
    </div>
  )
}

export default AdminProducts
