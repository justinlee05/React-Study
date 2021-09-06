import React from 'react'
import styled from 'styled-components'
import List from './lists'

export const style = {
    //배경
      background: styled.div`
            width:100%;
            height:100vh;
            background-color:gray;
            display:flex;
            align-items: center;
            justify-content: center;
            `,
        

            //모달
        modal : styled.div`
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
        edit_modal_background:styled.div`
            /* z-index:1; */
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
        edit_modal:styled.div`
        width:400px;
        height:500px;
        background-color:white;
        box-shadow:-10px 0px 0px black
        `,


        //수정인풋
        edit_input:styled.textarea`
        resize:none;
        
        `,

            //인풋감싸는 div
        input_wrapper:styled.div`
            width:60%;
            height:10%;
            margin-top:10%;
            display:flex;
            flex-direction:row;
            align-items:center;
            border:1px solid black;
        `,


            //인풋
        input:styled.input`
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
        input_button:styled.button`
            width:55px;
            height:100%;
            border:none;
            
            `,


            //ul 감싸는거
        list_ul_wrapper:styled.div`
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
        list_ul:styled.ul`{
            
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
        list_li:styled.p`
            height:auto;
            
            margin-right:10px;
            margin-left:20px;
            text-overflow: ellipsis;
            border:1px solid black;
            margin-top:10px;
            margin-bottom:20px;
            white-space:normal;
            word-break:break-all;
            resize:none;
            background-color:rgb(0,0,0,0);
            outline:none;
            overflow-y:visible;
            
        `,

        

        list_edit:styled.input`
            
        `,



        //블럭
        list_li_wrapper:styled.div`
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
        head_wrapper:styled.div`
            display:flex;
            flex-direction:row;
            width:95%;
            margin-top:10px;
            align-items: center;
            justify-content: space-between;
        `,


        //아이디
        list_b:styled.b`
            
        `,

        //삭제버튼
        button_remove :styled.button`
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

