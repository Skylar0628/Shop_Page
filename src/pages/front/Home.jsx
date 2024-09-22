import React from 'react'
import Carousel from '../../components/Carousel'
import Cart from '../../components/Cart'
import { CartList } from '../../DataList/CartList'
import StoreService from '../../components/StoreService'
import { StoreServiceList } from '../../DataList/StoreServiceList'
import FeetBack from '../../components/FeetBack'
import { FeedbackList } from '../../DataList/FeedbackList'


const Home = () => {
  return (<>
  {/* 輪播 */}
  <div className='containrt-fluid'>
     <div className='row flex-md-row-reverse flex-column'>
        <div className='col' style={{ height:'500px' }}>
          <Carousel/>
        </div>
      </div>
  </div>

  {/* 卡片區塊 */}
  <div className='container mt-5'>
    <h2 className='text-center mb-4'>推薦新品</h2>
    <Cart CartList={CartList}/>
  </div>    

  {/* 評價 */}
  <div className='bg-light mt-5'>
    <div className="container">
     <FeetBack FeedbackList={FeedbackList}/>
    </div>
  </div>
  
  {/* 門市服務 */}
  <div className='container my-5'>
        <h2 className='mb-4'>門市服務</h2>
        <StoreService StoreServiceList={StoreServiceList}/>
  </div>

  {/* 社群 */}
  <div className='bg-light py-3'>
  <div className='container'>
    <div className='d-flex justify-content-start'>
        <i className="bi bi-facebook" style={{ fontSize: '2.6rem', marginRight: '35px' }}></i>
        <i className="bi bi-instagram" style={{ fontSize: '2.6rem', marginRight: '35px' }}></i>
        <i className="bi bi-youtube" style={{ fontSize: '2.6rem', marginRight: '35px' }}></i>
        <i className="bi bi-line" style={{ fontSize: '2.6rem' }}></i>
    </div>
  </div>
</div>

    </>)
}

export default Home
