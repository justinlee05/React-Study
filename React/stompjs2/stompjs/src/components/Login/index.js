import React, { useRef } from "react";
import { onLogin } from "../../functions/onLogin";
import { S } from "./style";


function Login() {

    const id = useRef();
    const password = useRef();

    function CheckValue(){
        const Vid = id.current.value ? id.current.value : undefined;
        const Vpassword = password.current.value ? password.current.value : undefined;
        console.log(Vid,Vpassword,'호출함.', 'onLogin(Vid,Vpassword) 호출');
        onLogin(Vid,Vpassword);
    }


    return (
        <S.LoginWrapper>
            <p>로그인</p>
            <input id='id' placeholder='id' ref={id} />
            <input id='password' placeholder='password' ref={password} />
            <button onClick={() => {console.log('clicked'); CheckValue()}}>confirm</button>
        </S.LoginWrapper>
    )
}

export default Login;