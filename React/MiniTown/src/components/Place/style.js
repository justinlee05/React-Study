import styled from "styled-components";

export const S= {
    Header:styled.div`
        position:fixed;
        z-index:5;
        width:100%;
        height:80px;
        top:0px;
        background-color:white;
        box-shadow: 0px 4.00163px 8.00326px rgba(0, 0, 0, 0.15);
        display:flex;
        align-items:center;
        justify-content:center;
    `,
    Wrapper:styled.div`
        margin-top:80px;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:#F6F6F6;
    `,

    Body:styled.div`
    
        width:1000px;
    `,
    BackButton:styled.img`
    position:fixed;
    top:10px;
    left:180px;
    z-index:6;
    cursor:pointer;
    border-radius:100px;
    `,
    Title:styled.img`
    
    `,
}