import React, { useState } from 'react';



function Input(){
    const [inputText, setText] = useState('');

    function onChange(e){
        setText(e.target.value);
    }
    return (
        <div>
            <input onChange={onChange} />
            <b>{inputText}</b>
        </div>
    )
}

export default Input;