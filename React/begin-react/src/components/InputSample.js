import React, { useRef, useState } from 'react';

function InputSample() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const onChange1 = (e) => {
    console.log(e.target.value);
    setNickname(e.target.value);
  };

  const onReset = () => {
    setName('');
    setNickname('');
  };

  return (
    <div>
      <input onChange={onChange} value={name} placeholder="이름" />
      <input onChange={onChange1} value={nickname} placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:{name + '(' + nickname + ')'}</b>
      </div>
    </div>
  );
}

export default InputSample;
