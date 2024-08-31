import React, { useEffect } from 'react';
import axios from 'axios';

const ApiUrl = process.env.REACT_APP_API_URL;
const ApiPath = process.env.REACT_APP_API_PATH;

const App = () => {
  useEffect(()=>{
   (async()=>{
     const res = await axios.get(`/v2/api/${ApiPath}/products/all`)
     console.log(res)
   })();
  },[]);

  return (
    <div>
        123
    </div>
  )
}

export default App
