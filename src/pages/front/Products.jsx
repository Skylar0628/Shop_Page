import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiPath } from '../../App';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';


const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [pagination,setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
 const getProducts = async(page=1)=> {
  setPagination(true);
  const url = `/v2/api/${ApiPath}/products?page=${page}`    
  const res = await axios.get(url);
  const {products, pagination} = res.data;
  setProducts(products);
  setPagination(pagination);
 }

 useEffect(()=>{
  getProducts()
 },[]);


  return (<>
    <div className="container mt-md-5 mt-3 mb-7">
      {isLoading && ( <Loading />)}
      <div className="row">
        {products.map((item, index)=>(
          <div className="col-md-3" key={index}> 
          <div className="card border-0 mb-4 position-relative position-relative">
            <img src={`${item.imageUrl}`}
             className="card-img-top rounded-0 object-cover" height={250} alt="product-img" 
             />
            <a href="#" className="text-dark">
              <i className="far fa-heart position-absolute" style={{right: '16px', top: '16px'}}></i>
            </a>
            <div className="card-body py-1 px-2">
              <h4 className="mb-0 mt-3">
                <Link style={{ color:'black', textDecoration:'none' }} to={`/product/${item.id}`}>{item.title}</Link>
              </h4>
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
