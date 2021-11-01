import styled from "styled-components";

export const S ={
    MapWrapper:styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        width:1000px;
        background-color:white;


    `,

    Head:styled.div`
        height:50px;
        display:flex;
        flex-direction:row;
        align-items:center;
        width:100%;
        justify-content:center;
        font-size:25px;
        font-weight:bold;
        margin-bottom:450px;

    `,
    HeadTitle:styled.p`
        display:flex;
        flex-direction:row;
        align-items:center;
    `,
    MidTitle:styled.p`
        color:#4993FA;
        padding:5px;
    `,
    BoxWrapper:styled.div`
    
    position:absolute;
    `,

    MarkerBox:styled.div`
    background-color:white;
    left:20px;
    z-index:-1;
    position:absolute;
    top:-40px;
    border:3px solid blue;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    height:25px;
    padding-left:10px;
    padding-right:10px;
    display:flex;
    align-items:center;
    
    
    `,
    BoxArrow:styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
        border:3px solid blue;
        position:absolute;
        top:-3px;
        right:-27px;
        width:20px;
        height:25px;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        background-color:blue;
        color:white;
        

    `,

    ArrText:styled.p`
    padding:0px;
    margin:0px;
    margin-bottom:5px;
    
    `,

    FootWrapper:styled.div`
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    
    `,
    FootTextWrapper:styled.div`
    padding:0px;
    margin:0px;
        display:flex;
        flex-direction:row;
        height:25px;
        align-items:center;
        font-size:25px;
        font-weight:500;
        font-family: Noto Sans;

    `,
    Dot:styled.img`
    width:16px;
    height:16px;
    padding:0px;
    margin:0px;
    margin-right:10px;
    `,
    FootTextSubject:styled.p`
    padding:0px;
    margin:0px;
    `,
    FootTextValue:styled.p`
    padding:0px;
    margin:0px;
    color:#FF8A00;
    margin-left:10px;
    `,
}