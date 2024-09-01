import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { ApiPath } from '../../App';


const AdminProducts = () => {
  const [ products, setProducts ] = useState([]);
  const [ paginayion, setPagination ] = useState({});

    useEffect(()=>{
        (async()=>{
          const res = await axios.get(`/v2/api/${ApiPath}/admin/products`)
          try {
            console.log(res)
            const {products} = res.data
            setProducts(products)
          } catch (error) {
            console.error(error)
          }
        })()
    },[]);


  return (
    <div className='p-3'>
      <h3>產品列表</h3>
      <hr />
      <div className='text-end'>
        <button type='button' className='btn btn-primary btn-sm'>
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
                 <button type='button' className='btn btn-primary btn-sm'>
                 編輯
                 </button>
                 <button
                 type='button'
                 className='btn btn-outline-danger btn-sm ms-2'
                 >
                 刪除
                 </button>
             </td>
             </tr>  
          ))}
          
        </tbody>
      </table>

      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link disabled' href='/' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
            </a>
          </li>
          {[...new Array(5)].map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className='page-item' key={`${i}_page`}>
              <a className={`page-link ${i + 1 === 1 && 'active'}`} href='/'>
                {i + 1}
              </a>
            </li>
          ))}
          <li className='page-item'>
            <a className='page-link' href='/' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminProducts
