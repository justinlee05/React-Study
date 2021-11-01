import styled from "styled-components";

export const S = {
  Header: styled.div`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 80px;
    top: 0px;
    background-color: #4993fa;
    box-shadow: 0px 4.00163px 8.00326px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Wrapper: styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f6f6;
  `,

  Body: styled.div`
    margin-top: 24px;
    width: 1000px;
  `,
  BackButton: styled.img`
    position: fixed;
    top: 10px;
    left: 180px;
    z-index: 6;
    cursor: pointer;
    border-radius: 100px;
  `,
  Title: styled.img``,
  Chatting: styled.img`
    position: fixed;
    z-index: 3;
    top:15px;
    right:250px;
  `,
  Plus: styled.img`
    position: fixed;
    z-index: 3;
    top:10px;
    right:160px;
  `,
  
};
