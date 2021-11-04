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
}