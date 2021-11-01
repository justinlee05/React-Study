import styled from "styled-components";

export const S = {
  RegWrapper: styled.div`
  width:100%;
  height:100vh;
    display:flex;
    font-family: 'Noto Sans KR', sans-serif;

  `,

  Background:styled.img`
  position:absolute;
  width:50%;
  height:100vh;
  left:0px;
  `,

  BackgroundImg:styled.img`
  position:absolute;
  left:150px;
  top:200px;
  width:440px;

  `,

  Google:styled.img`
  width:45px;
  cursor: pointer;
  `,
  RightWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    top:60px;
    right:150px;
    position:absolute;
  `,
  TitleWrapper: styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
    margin-bottom:30px;
  `,

  Input: styled.input`
    margin-right: ${(props) => props.marginRight}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  `,

  Icons:styled.img`
    width:20px;
    margin-left:12px;
  `,

  Title:styled.b`
    font-size:52px;
    color:#4993FA;
    
  `,

  HeadWrapper:styled.div`
  display:flex;
  flex-direction:row;
  `,

  LogWrapper:styled.div`
  position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    top:36px;
    right:230px;
  `,

  GoogleLog:styled.div`
   

    width:45px;
    height:45px;
  `,

  LogText:styled.p`
    

    padding:0px;
    margin:0px;
    font-size:12px;
  `,

  Exit:styled.img`
    position:absolute;
    top:30px;
    right:70px;
    width:58px;
    height:58px;
    cursor:pointer;
  `,

  IdWrapper: styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  border: 2px solid #CFCFCF;
    border-radius: 8px;
    width: 236px;
    height: 48px;
  `,

  InputId: styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }
  `,
  PassWrapper: styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  border: 2px solid #CFCFCF;
    border-radius: 8px;

    width: 236px;
    height: 48px;
  `,

  InputPass: styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }`,

  PhoneWrapper: styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
    border: 2px solid #CFCFCF;
    border-radius: 8px;

    width: 312px;
    height: 48px;
  `,

  InputPhone: styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }`,

  PhoneButton: styled.button`
  color:white;
  border:none;
  background-color:#4993FA;
    font-size:20px;
    width: 168px;    border-radius:8px;

    height: 48px;
  `,

  CodeWrapper:styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
    border: 2px solid #CFCFCF;
    border-radius: 8px;

    width: 496px;
    height: 48px;
  `,

  InputCode:styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }
  `,
  BirthWrapper: styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  border: 2px solid #CFCFCF;
    border-radius: 8px;

    width: 496px;
    height: 48px;
  `,

  InputBirth: styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }`,

  NameWrapper: styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
    border: 2px solid #CFCFCF;
    border-radius: 8px;

    width: 312px;
    height: 48px;
  `,

  InputName: styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }`,

  LocWrapper: styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
    border-radius: 8px;

    border: 2px solid #CFCFCF;
    width: 200px;
    height: 48px;
  `,

  InputLocate: styled.input`
  width:calc(100% - 66px);
  padding-right:20px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }`,

  LocDetailWrapper:styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
    border-radius: 8px;

    border: 2px solid #CFCFCF;
    width: 112px;
    height: 48px;
  `,

  InputLocDetail:styled.input`
  width:calc(100% - 20px);
  padding-right:10px;
  margin-left:10px;
  height:100%;
  border:none;
  outline:none;
  background-color:rgb(0,0,0,0);
  font-size:16px;
  &::placeholder{
    color: #CFCFCF;
  }
  `,

  LocateButton: styled.button`
  color:white;
  border:none;
  background-color:#4993FA;
  font-size:20px;
    border-radius: 8px;

    width: 168px;
    height: 48px;
  `,

  InputWrapper: styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::placeholder{
    color: #CFCFCF;
  }
  `,

  RowAlign: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 496px;
    height: 48px;
    margin-bottom: 24px;
  `,

  GenderWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 168px;
    height: 48px;
  `,

  GenderButton: styled.div`
  font-size:20px;
  display:flex;
  align-items:center;
  justify-content:center;
    width: 80px;
    border-radius: 8px;
    color:#CFCFCF;
    height: 48px;
    border: 2px solid #CFCFCF;
  `,

  Footer: styled.div`
  margin-top:10px;
    height: 20px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
  `,

  FootText: styled.p`
    margin: 0px;
    padding: 0px;
  `,

  SignButton: styled.button`
  font-size:32px;
  border-radius:16px;
  border:none;
  color:white;
    margin-top:40px;
    width: 400px;
    height: 64px;
    background-color: #4993fa;
  `,
};
