import React from 'react';
import './App.css';
import './App.css'
import Counter from './Products/Counter';

function App() {

  const style = {
    backgroundColor:'gray',
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100vh'
}

  return (
    <div style={style}>
      <h1>카운트 만들기</h1>
      <Counter/>
    </div>
  );
}

export default App;
