import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiPath } from '../../App';
import Pagination from '../../components/Pagination';



const Products = () => {
  const [products, setProducts] = useState([]);
  const [pagination,setPagination] = useState({});
  
 const getProducts = async(page=1)=> {

  const url = `/v2/api/${ApiPath}/products?page=${page}`
  const res = await axios.get(url)
  const {products, pagination} = res.data;
  setProducts(products);
  setPagination(pagination);
 }

 useEffect(()=>{
  getProducts(1)
 },[])
  return (<>
    <div className="container mt-md-5 mt-3 mb-7">
      <div className="row">
        {products.map((item, index)=>(
          <div className="col-md-3" key={index}>
          <div className="card border-0 mb-4 position-relative position-relative">
            <img src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
             className="card-img-top rounded-0 object-cover" height={250} alt="..." 
             />
            <a href="#" className="text-dark">
              <i className="far fa-heart position-absolute" style={{right: '16px', top: '16px'}}></i>
            </a>
            <div className="card-body p-0">
              <h4 className="mb-0 mt-3"><a href="#">{item.title}</a></h4>
              <p className="text-muted mt-3">NT$ {item.price}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      <nav className="d-flex justify-content-center">
         <Pagination pagination={pagination} getProjects={getProducts}/>
      </nav>
    </div>
  </>)
}

export default Products
