import React from 'react';
import Wrapper from './Wrapper';

function Test(props) {
  return (
    <Wrapper>
      <div>
        <b>My Name: </b> {props.name}
      </div>
      <div>
        <b>My Age: </b> {props.age}
      </div>
      <div>
        <b>My Major:</b> {props.major}
      </div>
    </Wrapper>
  );
}

export default Test;
