import styled from "styled-components";

export const S = {
    RowAlign : styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    `,

    Wrapper:styled.div`
        background-color:#DCB35C;
        border:1px solid black;
        position:absolute;
        display:inline-flex;
        
    `,
    Borders:styled.div`
    position:absolute;
    top:26.5px;
    left:26.5px;

    `,
    Background:styled.div`
    position:absolute;
    background-color:rgb(0,0,0,0);
    `,
    Turn:styled.div`
    border:5px solid gray;
    font-size:30px;
    position:absolute;
    border-radius:10px;
    height:100px;
    width:900px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:#DCB36A;
    font-weight:bold;

    `,
    TurnText:styled.span`
        padding:10px;
        border-radius:20px;
    `,
    PassButton:styled.button`
    width:200px;
    height:60px;
    border:none;
    font-size:40px;
    border-radius:20px;
    `,
}