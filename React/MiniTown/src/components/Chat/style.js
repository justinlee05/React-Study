import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    background-color: #f6faff;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
  `,
  BlockWrapper: styled.div`
    border: 1px solid black;
    width: 328px;
    height: 64px;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
  `,
  BlockImg: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-left: 15px;
    margin-right: 15px;
    display: inline-block;
    content: "";
  `,
  BlockTextWrapper: styled.div``,
  BlockTitle: styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0px;
  `,
  BlockRecent: styled.p`
    font-size: 10px;
    color: #787878;
    margin: 0px;
  `,
  ListWrapper: styled.div`
    width: 360px;
    height: calc(100vh - 95px);
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-right: 1px solid #efefef;
    position: absolute;
    z-index: 3;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  ListHeader: styled.div`
    width: 360px;
    height: 95px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    border-right: 1px solid #efefef;
    z-index: 3;
  `,
  ListSearch: styled.input`
    outline: none;
    border: none;
    background-color: rgb(0, 0, 0, 0);
    margin-left: 10px;
    &::placeholder {
      color: #cccccc;
    }
  `,
  SearchIcon: styled.img`
    margin-right: 15px;
  `,
  SearchWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 304px;
    height: 28px;
    border-radius: 24px;
    background-color: #f3f3f5;
    justify-content: space-between;
    margin-left: 28px;
    margin-top: 18px;
  `,
  ListTitle: styled.p`
    font-size: 28px;
    font-weight: bold;
    margin: 0px;
    margin-left: 15px;
    margin-top: 10px;
  `,
  ChatHeader: styled.div`
    border-bottom: 1px solid #dfdfdf;
    position: fixed;
    width: calc(100% - 360px);
    top: 0px;
    right: 0px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  `,
  ChatHeadTitle: styled.p`
    font-size: 20px;
    font-weight: bold;
  `,
  HeadImg: styled.img`
    border: 1px solid black;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    margin-left: 20px;
    margin-right: 15px;
  `,
  HeadTitleWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  More: styled.img`
    margin-right: 20px;
    cursor: pointer;
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  InputWrapper: styled.div`
    width: calc(100% - 360px);
    height: 56px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: white;
    box-shadow: 0px -3.2px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  PlanIcon: styled.img`
    margin-left: 40px;
    cursor: pointer;
  `,
  SendButton: styled.div`
    background-color: #4993fa;
    height: 100%;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  SendIcon: styled.img``,
  SendInput:styled.input`
    width:75%;
    height:100%;
    background-color:rgb(0,0,0,0);
    outline:none;
    border:none;
    font-size:20px;
  `,
  ChatWrapper:styled.div`
  position:absolute;
  z-index:3;
  width:calc(100% - 360px);
  height:84%;
    left:360px;
    top:65px;
    overflow-y:scroll;
    display:flex;
    flex-direction:column-reverse;
    ::-webkit-scrollbar { display: none; }

  `,
  MyChat:styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
  
  `,
  MyChatbox:styled.p`
  background-color:blue;
  color:white;
  border-radius:30px;
  padding:10px;
  margin-right:10px;
  `,
  OtherChat:styled.div`
  padding-left:10px;
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  
  `,
  OtherChatbox:styled.p`
  background-color:white;
  color:blue;
  border-radius:30px;
  padding:10px;
  margin-left:10px;
  `,
  Temp:styled.div`
    display:inline-flex;
    width:100%;
    position:absolute;
    height:100%;
    z-index:10;
   
  `,

  MoreWrapper:styled.div`
    position:fixed;
    z-index:15;
    background-color:rgb(1,1,1,0.5);
    width:100%;
    height:100vh;
    top:0px;
    left:0px;
    visibility:hidden;


  `,

  MoreRight:styled.div`
    position:fixed;
    right:-500px;
    z-index:16;
    background-color:white;
    width:28%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  `,
  MoreHead:styled.div`
  border-bottom:2px solid #8C8C8C;
  margin-top:10px;
  padding-bottom:10px;
  height:60px;
  display:flex;
  flex-direction:row;
  align-items:center;
  width:90%;
  `,

    Text1:styled.p`
    color:#4993FA;
    font-size:30px;
    font-weight:bold;
    margin-left:20px;
    `,
  Img1:styled.img`
  
  `,
  Img2:styled.img`
    width:90%;
    padding-top:10px;
    padding-bottom:10px;
    border-bottom:1px solid #8C8C8C;
  `


};
