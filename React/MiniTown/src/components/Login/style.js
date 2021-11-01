import styled from "styled-components";

export const S = {
    Background:styled.img`
        position:absolute;
        left:0px;
        top:0px;
        width:65%;
        height:100vh;
        
    `,

    BackgroundImg: styled.img`
        width:407px;
    `,

    Box:styled.div`
    width:1040px;
    display:flex;
    flex-direction:row;
    box-shadow:3px 3px 50px -30px black;
    `,

    HeadWrapper: styled.div`
        display:flex;
        flex-direction:row;
        width:100%;
        align-items:center;
        justify-content:space-between;

    `,

    Exit : styled.img`
        margin-right:10px;
        margin-top:10px;

        cursor:pointer;
    `,

    LoginWrapper:styled.div`
        position:absolute;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        width:100%;
        height:100vh;

    `,

    LeftWrapper: styled.div`
        background-color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        width:520px;
        height:640px;
    `,

    RightWrapper:styled.div`
        background-color:white;
        width:520px;
        height:640px;
        display:flex;
        flex-direction:column;
        align-items:center;
    `,

    MidWrapper:styled.div`
        width:360px;
        margin-top:50px;
    `,

    GoogleImg:styled.img`
        width:40px;
        padding-top:10px;
        cursor:pointer;
    `,

    GoogleWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        height:40px;
        margin-left:80px;


    `,

    GoogleText:styled.p`

    font-size:15px;
    margin-left:7px;

    `,   

    Title:styled.p`
        font-size:40px;
        color:#4993FA;
        font-weight:bold;
        margin:0px;
        margin-right:240px;
        padding:0px;
      
    `,

    InputWrapper:styled.div`
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        margin-top:50px;

    `,

    InputName:styled.p`
    width:100px;
        font-size:24px;
        font-weight:bold;
        text-align:start;
        padding:0px;
        margin:0px;
        margin-bottom:10px;
        
        
    `,

    Inputs:styled.input`
    width:340px;
    height:44px;
    font-size:24px;
    padding-left:20px;
    border-radius:5.6px;
    border:1px solid #D3D3D3;
    outline:none;
    &::placeholder{
        color:#D3D3D3;
    }
    `,

    LoginButton:styled.button`
    width:360px;
    height:64px;
    background-color:#4993FA;
    color:white;
    border-radius:16px;
    font-size:32px;
    margin-top:60px;
    border:none;
    `,

    FootWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    `,

    FootText:styled.p`
        padding:0px;
        margin:0px;
        font-size:16px;
        margin-top:10px;
    `,

}