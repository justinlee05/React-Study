import React, { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
      name:"",
      nickname:""
  });

  const { name , nickname} = inputs;

  const refname = useRef();
  const refnick = useRef();
  
  const onChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target.value);
    const newInputs ={
      ...inputs,
      [name] :value
    }
    setInputs(newInputs)

  };

  const onReset = () => {

    console.log(name,nickname)
    setInputs('')
    
    refname.current.value = ''
    refnick.current.value = ''
    refname.current.focus();
  };

  return (
    <div>
      <input  onChange={onChange} name="name" placeholder="이름" ref={refname} />
      <input  onChange={onChange} name="nickname" placeholder="닉네임" ref={refnick} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:{name}({nickname})</b>
      </div>
    </div>
  );
}

export default InputSample;
