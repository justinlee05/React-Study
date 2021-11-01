import styled from "styled-components";

export const S = {
    Wrapper:styled.div`
        width:1040px;
        margin-top:80px;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:#E5E5E5;
    `,

    SearchWrapper:styled.div`
        width:1040px;
        height:118px;
        background-color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:30px;
        margin-bottom:30px;
    `,
    InputWrapper:styled.div`
    border-bottom:2px solid #72ADFF;
    width:960px;
    height:52px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    `,
    Icon:styled.img`
    margin-right:20px;
    `,
    Input:styled.input`
    width:85%;
    height:50px;
    border:none;
    outline:none;
    margin-left:15px;
        font-size:24px;
        &::placeholder{
            color:#9DC6FF;
        }
    `,

    ListWrapperWrapper:styled.div`
        width:1040px;
        display:flex;
        flex-direction:column;
        align-items:center;
    `,
    ListWrapper:styled.div`
        width:1040px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    `,
    ColumnAlign:styled.div`
        width:248px;
    `,
    BlockWrapper:styled.div`
        width:100%;
        height:256px;
        border:1px solid #DDDDDD;
        margin-bottom:20px;
        background-color:white;
    `,
    BlockImgWrapper:styled.div`
    width:100%;
    height:160px;
    background-color:lightgray;
    overflow:hidden;
    `,
    BlockImg:styled.img`
    width:100%;
    
    
    `,
    BlockTitle:styled.p`
        margin:0px;
        margin-left:10px;
        margin-top:6px;
        font-size:16px;
    `,
    BlockDate:styled.p`
    margin:0px;
    margin-left:10px;
    margin-top:10px;
    color:#787878;
    `,
    BlockPrice:styled.p`
    margin:0px;
    margin-left:10px;
    color:#72ADFF;
    font-size:20px;
    font-weight:bold;
    
    
    `,
    TotalWrapper:styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
   
    background-color:#E5E5E5;
    `,
    
}

