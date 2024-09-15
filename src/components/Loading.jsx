import React from 'react'
import ReactLoading from 'react-loading';
import '../stylesheet/all.scss';

const Loading = () => {
  
  return (<>
  <div className='loading'>
     <ReactLoading type='bubbles' color='white' height={80} width={100} />
  </div>
  </>)
}

export default Loading
