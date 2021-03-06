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
        alert('???????????? ?????? ?????????????????????.');
        return;
    }
    const body = {
        phone:phone.current.value
    }
     axios.post(baseurl+'api/auth/phone',body)
    .then( res=>{
      console.log(res);
      if(res.data.errorMessage){
        alert('?????? ??????????????? ????????? ????????? ???????????????.');
        return;
      }
    })
    .catch(err=>{
        console.log(err)
        alert('???????????? ?????? ?????????????????????.')
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
        <S.LogText>Google??? ????????????</S.LogText>
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
              <S.InputId type="text" placeholder="?????????" ref={id} />
            </S.IdWrapper>
            <S.PassWrapper>
              <S.Icons src={PASSWORD} alt="" />
              <S.InputPass type="password" placeholder="????????????" ref={password} />
            </S.PassWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.PhoneWrapper>
              <S.Icons src={PHONE} alt="" />
              <S.InputPhone type="text" placeholder="????????????" ref={phone} />
            </S.PhoneWrapper>
            <S.PhoneButton onClick={() => checkPhone()}>?????? ??????</S.PhoneButton>
          </S.RowAlign>
          <S.RowAlign>
            <S.CodeWrapper>
              <S.Icons src={CODE} alt="" />
              <S.InputCode type="text" placeholder="????????????" ref={code} />
            </S.CodeWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.BirthWrapper>
              <S.Icons src={BIRTH} alt="" />
              <S.InputBirth
                type="text"
                placeholder="???????????? ex)20000101"
                ref={birth}
              />
            </S.BirthWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.NameWrapper>
              <S.Icons src={NAME} alt="" />
              <S.InputName type="text" placeholder="??????" ref={name} />
            </S.NameWrapper>
            <S.GenderWrapper>
              <S.GenderButton
                style={{ marginRight: "8px" }}
                ref={male}
                onClick={() => {
                  onToggle(1);
                }}
              >
                <p>???</p>
              </S.GenderButton>
              <S.GenderButton
                ref={female}
                onClick={() => {
                  onToggle(0);
                }}
              >
                <p>???</p>
              </S.GenderButton>
            </S.GenderWrapper>
          </S.RowAlign>
          <S.RowAlign>
            <S.LocWrapper>
              <S.Icons src={LOCATE} alt="" />
              <S.InputLocate
                type="text"
                placeholder="????????? ??????"
                ref={locate}
              />
            </S.LocWrapper>
            <S.LocDetailWrapper>
              <S.InputLocDetail
              type="text"
              placeholder="?????? ??????" 
              ref={detailaddr}
              />
              
            </S.LocDetailWrapper>
            <S.LocateButton onClick={()=>{setIspopup(!ispopup)}}>?????? ??????</S.LocateButton>
            {
              ispopup && (
                <FindAddr locate={locate} setIspopup={setIspopup} />
              )
            }
          </S.RowAlign>
        </S.InputWrapper>
        <S.SignButton onClick={() => onSignup()}>Sign up</S.SignButton>
        <S.Footer>
          <S.FootText>?????? ???????????????????</S.FootText>
          <S.FootText style={{color:"blue",cursor:"pointer"}} onClick={()=>{history.push('/login')}}>????????? ????????????</S.FootText>
        </S.Footer>
      </S.RightWrapper>
    </S.RegWrapper>
    </>
  );
}

export default Register;
