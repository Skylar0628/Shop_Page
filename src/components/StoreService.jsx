import React from 'react'

const StoreService = ({StoreServiceList}) => {
  return (<>
    <div className='row row-cols-1 row-cols-md-4 g-1'>
        {StoreServiceList.map((item, index)=>(
            <div className='col' key={index}>
            <div class="card h-100" style={{ border:'none' }}>
                <img src={item.img} class="card-img-top" alt="StoreServiceList_img"
                 style={{ height:"200px", objectFit:'cover'}}
                />
                <h5 class="card-text mt-2 text-center">{item.title}</h5>
                </div>
                
            </div>
        ))}
    </div>
  </> )
}

export default StoreService
