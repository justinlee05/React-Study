import styled from "styled-components";

export const S = {
    WrapperWrapper:styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    `,
    Wrapper:styled.div`
    width:950px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    `,

    LeftSide:styled.div`
        width:30%;
    `,
    MidSide:styled.div`
        width:30%;
    `,
    RightSide:styled.div`
        width:30%;
    `,
    
    BlockWrapper:styled.div`
    cursor:pointer;
    width:100%;
    height:296px;
    background-color:white;
    margin-bottom:30px;
`,
    BlockImgWrapper:styled.div`
        height:60%;
        width:100%;
        background-color:lightgray;
`,
    BlockTitle:styled.p`
        font-weight:bold;
        font-size:20px;
        margin-left:20px;
        margin-bottom:0px;
    `,

    Dot:styled.img`
    width:10px;
    `,

    NumWrapper:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-left:30px;
    
    `,
    NumText:styled.p`
    font-size:16px;
    margin-left:10px;
    `,DetailHead:styled.div`
    top:0px;
    position:fixed;
    width:100%;
    height:80px;
    background-color:#4993FA;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10;
    `,
    DetailHeadTitle:styled.img`

    `,
    DetailBody:styled.div`
        width:100%;
        height:calc(100vh - 80px);
        background-color:#E5E5E5;
        display:flex;
        flex-direction:column;
        align-items:center;

    `,
    DetailWrapper:styled.div`
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background-color:white;
    `,
    DetailImgWrapper:styled.div`
        height:400px;
        background-color:lightgray;

    `,

    DetailTitle:styled.p`
        font-size:35px;
        font-weight:bold;
        margin:0px;
        margin-right:20px;
    `,
    DetailAddr:styled.p`
        font-size:20px;
        color:#8D8D8D;
        margin:0px;
    `,
    DetailTitleWrapper:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
        margin-left:30px;
        margin-top:20px;
    `,
    DetailNum:styled.p`
        margin:0px;
    `,
    DetailInfo:styled.p`
    margin:0px;
    `,
    DetailListWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        font-size:20px;
        margin-left:30px;
    `,
    Dot:styled.img`
    
    `,

    Apply:styled.div`
        cursor:pointer;
        background-color: #438FF8;
        width:100%;
        height:70px;
        font-size:35px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
    `,
    MidWrapper:styled.div`
        height:200px;
    `,
    ListsWrapper:styled.div`
    height:130px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    `,
    Back:styled.img`
    cursor:pointer;
    position:fixed;
    right:79%;
    top:80px;
    
    `
}