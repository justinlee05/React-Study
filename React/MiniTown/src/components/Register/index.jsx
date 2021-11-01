import React, { useEffect, useRef, useState } from "react";
import { onReg } from "../../functions/onReg";
import { S } from "./style";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
  Link,
} from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../App";
import ID from '../../assets/id.png'
import PASSWORD from '../../assets/password.png'
import NAME from '../../assets/name.png'
import LOCATE from '../../assets/locate.png'
import PHONE from '../../assets/phone.png'
import BIRTH from '../../assets/birth.png'
import BACKGROUND from '../../assets/regbackground.png'
import REGIMG from '../../assets/regimg.png'
import GOOGLE from '../../assets/Google.png'
import EXIT from '../../assets/Exit.png'
import GoogleLogin from "react-google-login";
import FindAddr from "./FindAddr";
import CODE from "../../assets/checking.png"

function Register() {


  const clientId =
    "383642137296-74g65unnhbblqlo5q7rhisjejgb76qpd.apps.googleusercontent.com";
  const history = useHistory();

  const [test, setTest] = useState(true);

  const [info, setInfo] = useState({
    id: undefined,
    password: undefined,
    name: undefined,
  });

  const id = useRef();
  const password = useRef();
  const name = useRef();
  const phone = useRef();
  const locate = useRef();
  const detailaddr = useRef();
  const birth = useRef();
  const male = useRef();
  const female = useRef();
  const code = useRef();

  const [gender, setGender] = useState("MEN");
  const onToggle = (i) => {
    if (i) {
      setGender("WOMEN");
      male.current.style.backgroundColor = "#4993FA";
      male.current.style.color = 'white';
      female.current.style.backgroundColor = "white";
      female.current.style.color = '#CFCFCF';

    } else {
      setGender("MEN");
      male.current.style.backgroundColor = "white";
      male.current.style.color = '#CFCFCF';
      female.current.style.backgroundColor = "#4993FA";
      female.current.style.color = 'white';
    }
  };


  const [checked , setCheck] = useState(false);
  const checkPhone = () => {
    
    setCheck(true)
    if(phone.current.value.length !== 11){
        alert('올바르지 않은 전화번호입니다.');
        return;
    }
    const body = {
        phone:phone.current.value
    }
     axios.post(baseurl+'api/auth/phone',body)
    .then( res=>{
      console.log(res);
      if(res.data.errorMessage){
        alert('해당 전화번호로 가입한 계정이 존재합니다.');
        return;
      }
    })
    .catch(err=>{
        console.log(err)
        alert('올바르지 않은 전화번호입니다.')
    })
    
}

const onSuccess = (res) => {
  console.log(res);
  const Vname = res.nt.Re;
  const Vid = res.nt.Yt;
  console.log(Vname,Vid);
  name.current.value = Vname;
  id.current.value = Vid;
  
}
const onFailure = () => {
    
}

const onSignup = () => {
  const Birth = birth.current.value
  const Vbirth = Birth.slice(0,4) + '-' + Birth.slice(4, 6) + '-' + Birth.slice(6,8);
  const addrCode = window.localStorage.getItem('zoneCode');
  const keyAddr = window.localStorage.getItem('keyaddr');
  const onSuccess = () => {
    history.push('/login');
  }
  onReg(id.current.value,password.current.value,Vbirth,name.current.value,gender,phone.current.value,code.current.value,locate.current.value,detailaddr.current.value,addrCode,keyAddr,onSuccess)
  

}

  const [ispopup, setIspopup] = useState(false);

  return (
    <>
    <S.Background src={BACKGROUND} />
    <S.BackgroundImg src={REGIMG} />
    <S.RegWrapper>
      <S.LogWrapper>
        <S.GoogleLog>
          
          <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <S.Google onClick={renderProps.onClick} src={GOOGLE} />
        )}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
        </S.GoogleLog>
        <S.LogText>Google로 회원가입</S.LogText>
      </S.LogWrapper>
      <S.Exit src={EXIT} onClick={()=>{history.push('/main')}} />

      <S.RightWrapper>
        <S.InputWrapper>
          <S.TitleWrapper>
            <S.Title>Sign up</S.Title>
            <div />
          </S.TitleWrapper>
          <S.RowAlign>
            <S.IdWrapper>
              <S.Icons src={ID} alt="" />
              <S.InputId type="text" placeholder="아이디" ref={id} />
            </S.IdWrapper>
            <S.PassWrapper>
              <S.Icons src={PASSWORD} alt="" />
              <S.InputPass type="password" placeholder="비밀번호" ref={password} />
            </S.PassWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.PhoneWrapper>
              <S.Icons src={PHONE} alt="" />
              <S.InputPhone type="text" placeholder="전화번호" ref={phone} />
            </S.PhoneWrapper>
            <S.PhoneButton onClick={() => checkPhone()}>인증 하기</S.PhoneButton>
          </S.RowAlign>
          <S.RowAlign>
            <S.CodeWrapper>
              <S.Icons src={CODE} alt="" />
              <S.InputCode type="text" placeholder="인증번호" ref={code} />
            </S.CodeWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.BirthWrapper>
              <S.Icons src={BIRTH} alt="" />
              <S.InputBirth
                type="text"
                placeholder="생년월일 ex)20000101"
                ref={birth}
              />
            </S.BirthWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.NameWrapper>
              <S.Icons src={NAME} alt="" />
              <S.InputName type="text" placeholder="이름" ref={name} />
            </S.NameWrapper>
            <S.GenderWrapper>
              <S.GenderButton
                style={{ marginRight: "8px" }}
                ref={male}
                onClick={() => {
                  onToggle(1);
                }}
              >
                <p>남</p>
              </S.GenderButton>
              <S.GenderButton
                ref={female}
                onClick={() => {
                  onToggle(0);
                }}
              >
                <p>여</p>
              </S.GenderButton>
            </S.GenderWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.LocWrapper>
              <S.Icons src={LOCATE} alt="" />
              <S.InputLocate
                type="text"
                placeholder="거주지 주소"
                ref={locate}
              />
            </S.LocWrapper>
            <S.LocDetailWrapper>
              <S.InputLocDetail
              type="text"
              placeholder="상세 주소" 
              ref={detailaddr}
              />
              
            </S.LocDetailWrapper>
            <S.LocateButton onClick={()=>{setIspopup(!ispopup)}}>주소 찾기</S.LocateButton>
            {
              ispopup && (
                <FindAddr locate={locate} setIspopup={setIspopup} />
              )
            }
          </S.RowAlign>
        </S.InputWrapper>
        <S.SignButton onClick={() => onSignup()}>Sign up</S.SignButton>
        <S.Footer>
          <S.FootText>이미 회원이신가요?</S.FootText>
          <S.FootText style={{color:"blue",cursor:"pointer"}} onClick={()=>{history.push('/login')}}>로그인 하러가기</S.FootText>
        </S.Footer>
      </S.RightWrapper>
    </S.RegWrapper>
    </>
  );
}

export default Register;
