import React, { useState } from 'react';
import JSX from './JSX';
import Props from './Props';
import Wrapper from './Wrapper';


function App() {


  return(
    <Wrapper>
      <Props color='red' name='React' />
      <Props color='blue' />
    </Wrapper>
    )
}



export default App;