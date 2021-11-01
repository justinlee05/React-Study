import styled from "styled-components";

export const S = {
    SearchWrapper:styled.div`
    background-color:white;
    margin-top:20px;
    margin-bottom:20px;
    `,

    SearchHead:styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `,

    HeadTitle:styled.p`
        width:92%;
        font-weight:bold;
        font-size:24px;        
    `,
    SearchInputWrapper:styled.div`
    border-bottom:2px solid #72ADFF;
    width:720px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    `,
    SearchInput:styled.input`
        outline:none;
        border:none;
        width:85%;
        height:50px;
        margin-left:15px;
        font-size:24px;
        &::placeholder{
            color:#9DC6FF;
        }
    
    `,
    SearchImg:styled.img`
        width:32px;
        margin:5px;
    `,
    SearchFoot:styled.div`
        display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:20px;
    `,
    FootTitle:styled.p`
        width:92%;
        font-weight:bold;
        font-size:24px;     
    `,
    CategoryWrapper:styled.div`
    width:885px;
    `,
    Category:styled.div`
        border-radius:92px;
        height:37px;
        background-color:#72ADFF;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        margin-right:10px;
        
    `,
    CateText:styled.p`
        font-size:20px;
        font-weight:bold;
        color:white;
        padding:0px;
        margin:0px;
        padding-left:15px;
        padding-right:15px;
        
    `,

    BlocksWrapperWrapper:styled.div`
        width:100%;
        border:1px solid black;
        display:flex;
        flex-direction:column;
        align-items:center;
    `,

    BlocksWrapper:styled.div`
        width:950px;
        border:1px solid black;
        display:flex;
        flex-direction:row;
    `,
    LeftBlocks:styled.div`
    
    `,
    MidBlocks:styled.div`
    
    `,
    RightBlocks:styled.div`
    
    `,
    
}