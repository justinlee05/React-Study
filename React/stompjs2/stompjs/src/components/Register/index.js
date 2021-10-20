import React, { useEffect, useRef } from "react";
import { onReg } from "../../functions/onReg";
import { S } from "./style";

function Register() {

    const id = useRef();
    const password = useRef();
    const name = useRef();
    const phone = useRef();
    
    function CheckValue(){
        const Vid = id.current.value ? id.current.value : undefined;
        const Vpassword = password.current.value ? password.current.value : undefined;
        const Vname = name.current.value ? name.current.value : undefined;
        const Vphone = phone.current.value ? phone.current.value : undefined;
        
        console.log(Vid,Vpassword,Vname,Vphone);
        onReg(Vid,Vpassword,Vname,Vphone);
    }
    


    return(
        <S.RegWrapper>
            <p>회원가입</p>
            <input id='id' placeholder='id' ref={id} />
            <input id='password' placeholder='password' ref={password} />
            <input id='name' placeholder='name' ref={name} />
            <input id='phone' placeholder='phone' ref={phone} />
            <button onClick={() => {console.log('Clicked'); CheckValue();}}>Confirm</button>
        </S.RegWrapper>
    )    
}

export default Register;
