import React from 'react';

function Wrapper(props) {
  const style = {
    border: '3px dotted blue',
    padding: '30px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
