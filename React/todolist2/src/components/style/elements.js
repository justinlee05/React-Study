import React from 'react'
import styled from 'styled-components'
import List from '../todoItem/lists'

export const Background = styled.div`
    display: flex;
`;

export const S = {
    //배경
      Background: styled.div`
            width:100%;
            height:100vh;
            background-color:gray;
            display:flex;
            align-items: center;
            justify-content: center;
            `,
        

            //모달
        Modal : styled.div`
            border:1px solid black;
            width:30%;
            height:80vh;
            background-color:white;
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color:rgb(255, 221, 71);
            box-shadow: inset 8px 3px white;
            border-radius:10px;
            `,

        //수정모달 배경 
        EditModalBackground:styled.div`
            z-index:1;
            position:fixed;
            width:100%;
            height:100vh;
            background-color:rgb(0,0,0,0.5);
            display:flex;
            align-items:center;
            justify-content:center;
            display:none;
            
        `,

        //수정모달
        EditModal:styled.div`
        width:400px;
        height:550px;
        background-color:white;
        box-shadow:inset 8px 3px 0px 0px gray;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        

        `,
        EditButtonWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center  ;
        
        width:80%;
        justify-content:space-around;
        `,

        //수정인풋
        EditInput:styled.textarea`
        resize:none;
        width:80%;
        height:50%;
        box-shadow:inset -8px -3px 0px 0px gray;
        border-radius:10px;
        background-color:lightgray;
        padding:10px;
        padding-right:18px;
        outline:none;
        
        `,

        //수정버튼
        EditConfig:styled.button`
 
        width:90px;
        height:40px;
        box-shadow:inset 8px 3px 0px 0px gray;
        border-radius:10px;
        padding-left:8px;
        padding-top:3px;
        border:none;
        }:active{
            box-shadow:inset -8px -3px 0px 0px gray;
            padding-left:0px;
            padding-top:0px;
            padding-right:8px;
            padding-bottom:3px;
            background-color:darkgray;
        }
        `,

        EditCancel:styled.button`
     
        width:90px;
        height:40px;
        box-shadow:inset 8px 3px 0px 0px gray;
        border-radius:10px;
        padding-left:8px;
        padding-top:3px;
        border:none;
    }:active{
            box-shadow:inset -8px -3px 0px 0px gray;
            padding-left:0px;
            padding-top:0px;
            padding-right:8px;
            padding-bottom:3px;
            background-color:darkgray;
        }
        `,


            //인풋감싸는 div
        InputWrapper:styled.div`
            width:60%;
            height:10%;
            margin-top:10%;
            display:flex;
            flex-direction:row;
            align-items:center;
            border:1px solid black;
        `,


            //인풋
        Input:styled.input`
            font-size:30px;
            height:100%;
            width:100%;
            padding-left:10px;
            border:none;
            }:focus{
                color:black;
                outline:none;
            }
            `,


            //버튼
        InputButton:styled.button`
            width:55px;
            height:100%;
            border:none;
            
            `,


            //ul 감싸는거
        ListulWrapper:styled.div`
            width:90%;
            height:60%;
            display:flex;
            flex-direction:column;
            align-items:center;
            box-shadow:inset -8px -3px 0px 0px white;
            border-radius:10px;
            overflow:scroll;
            overflow-x:hidden;
            background-color:rgb(209, 209, 209);
            margin-top:50px;
            -ms-overflow-style: none;
            }::-webkit-scrollbar {
                display:none;
                width: 10px;
                margin:10px;
            }
        `,
        
        //ul(블럭들 감싸는거)
        Listul:styled.ul`{
            
            width:100%;
            height:99%;
            display:flex;
            flex-direction:column;
            align-items:center;
            box-shadow:inset -8px 0px 0px 0px white;
            border-radius:10px;
            overflow:scroll;
            overflow-x:hidden;
            background-color:rgb(209, 209, 209);
            -ms-overflow-style: none;
            }::-webkit-scrollbar {
                display:none;
                width: 10px;
                margin:10px;
            }
        `,

        //글자
        Listli:styled.p`
            height:auto;
            
            margin-right:10px;
            margin-left:20px;
            text-overflow: ellipsis;
           
            margin-top:10px;
            margin-bottom:20px;
            white-space:normal;
            word-break:break-all;
            resize:none;
            background-color:rgb(0,0,0,0);
            outline:none;
            overflow-y:visible;
            
        `,

        

        ListEdit:styled.input`
            
        `,



        //블럭
        ListliWrapper:styled.div`
            width:80%;
            text-overflow: ellipsis;
            box-shadow: inset 8px 3px white;
            padding-left:20px;
            margin-top:20px;
            margin-left:10px;
            margin-right:10px;
            background-color:rgb(255, 221, 71);
            list-style:none;
            border-radius:15px;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        `,


        //버튼이랑 아이디 감싸는거 (헤더)
        HeadWrapper:styled.div`
            display:flex;
            flex-direction:row;
            width:95%;
            margin-top:10px;
            align-items: center;
            justify-content: space-between;
        `,


        //아이디
        Listb:styled.b`
            
        `,

        //삭제버튼
        ButtonRemove :styled.button`
            position:sticky;
            top:0px;
            right:0px;
            width:20px;
            height:20px;
            display:flex;
            align-items:center;
            justify-content:center;
            border:none;
            border-radius:10px;
           
            
        `,

}

