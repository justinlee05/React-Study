import React, { useRef } from "react";
import GoogleLogin from "react-google-login";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { onLogin } from "../../functions/onLogin";
import { S } from "./style";
import GOOGLE from '../../assets/Google.png'
import BACKGROUND from '../../assets/logbackground.png'
import BACKGROUNDIMG from '../../assets/logimg.png'
import EXIT from '../../assets/Exit.png'


const clientId =
  "383642137296-74g65unnhbblqlo5q7rhisjejgb76qpd.apps.googleusercontent.com";

function Googlelogin(props) {
  const history = useHistory();

  const onSuccess = async (response) => {
    console.log(response);
    console.log(response.nt.Yt);
    const email = response.nt.Yt;
    props.id.current.value = email;
  };

  const onFailure = (error) => {
    console.log(error);
  };

 

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <S.GoogleImg src={GOOGLE} onClick={renderProps.onClick} />
        )}
        buttonText="Login"
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

function Login() {
  const id = useRef();
  const password = useRef();
  const history = useHistory();

  function CheckValue() {
    const Vid = id.current.value ? id.current.value : undefined;
    const Vpassword = password.current.value
      ? password.current.value
      : undefined;
    console.log(Vid, Vpassword, "호출함.", "onLogin(Vid,Vpassword) 호출");
    const onSuccess = () => {
      history.push('/main');
    }
    onLogin(Vid, Vpassword,onSuccess);
    
  }

  return (
    <>
      <S.Background src={BACKGROUND} />
      <S.LoginWrapper>
        <S.Box>
          <S.LeftWrapper>
            <S.BackgroundImg src={BACKGROUNDIMG} />
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.HeadWrapper>
              <S.GoogleWrapper>
                <Googlelogin id={id} />
                <S.GoogleText>Google로 로그인하기</S.GoogleText>
              </S.GoogleWrapper>
              <S.Exit src={EXIT} onClick={()=>{history.push('/main')}} />
            </S.HeadWrapper>
            <S.MidWrapper>
              <S.Title>Login</S.Title>
              <S.InputWrapper>
                <S.InputName>아이디</S.InputName>
                <S.Inputs type="text" ref={id} placeholder="id" />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputName>비밀번호</S.InputName>
                <S.Inputs type="password" ref={password} placeholder="password" />
              </S.InputWrapper>
              <S.LoginButton onClick={() => CheckValue()}>login</S.LoginButton>
              <S.FootWrapper>
                <S.FootText>아직 회원이 아니신가요? </S.FootText>
                <S.FootText style={{color:"blue",cursor:"pointer"}} onClick={()=>{history.push('/signup')}}> 회원가입 하러가기</S.FootText>
              </S.FootWrapper>
            </S.MidWrapper>
          </S.RightWrapper>
        </S.Box>
      </S.LoginWrapper>
    </>
  );
}

export default Login;
