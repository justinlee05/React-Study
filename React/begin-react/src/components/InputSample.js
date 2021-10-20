import React, { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
      name:"",
      nickname:""
  });

  const {name , nickname} = inputs;
  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const onReset = () => {

  };

  return (
    <div>
      <input onChange={onChange} name="name" value={name} placeholder="이름" />
      <input onChange={onChange} name="nickname" value={nickname} placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:{name}({nickname})</b>
      </div>
    </div>
  );
}

export default InputSample;
