import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => {setCount(count + 1); console.log('+1')}}>+1</button>
      <button onClick={() => {setCount(count - 1); console.log('-1')}}>-1</button>
    </>
  );
}

export default Counter;
