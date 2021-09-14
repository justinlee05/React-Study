import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [current,setCurrent] = useState(5);
  const [api,editApi] = useState(
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(res=> {
      console.log(res[1]);
      return res;
      
    })

  );
  console.log(api[1])
  
  
  

  



    
  



  return(
    <div>
      
    </div>
  )
}

export default App;
