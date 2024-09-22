import React from 'react'

const Cart = ({CartList}) => {
  return (<>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {CartList.map((item,index)=>(
      <div className="col">
        <div className="card h-100">
          <img 
            src={item.cart_img} className="card-img-top" alt="cart_img" 
            style={{ height:'250px', objectFit:'cover', objectPosition:'cneter' }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.directions}</p>
          </div>
        </div>
      </div>
    ))}
</div>
  </>)
}

export default Cart
