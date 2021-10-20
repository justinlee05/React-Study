import styled from "styled-components";


export const S = {
  Wrapper: styled.div`
    margin: 0px;
    padding: 0px;
    background-image: url(${(props) => props.img});
    background-size: 100% 860px;
    width: 1920px;
    height: 860px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  `,

  SlideWrapper: styled.div`
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 305px;
    top: 134px;
    width: 800px;
    height: 545px;
    #Rarrow {
      width: 55px;
      position: absolute;
      z-index: 3;
      top: 224px;
      right: 75px;
    }
    #Larrow {
      width: 55px;
      position: absolute;
      z-index: 3;
      top: 224px;
      left: 75px;
    }
  `,

  Slides: styled.div`
    z-index: 2;
    position: absolute;
    transition: 0.5s;
    width: 400px;
    height: 545px;
    background-color: rgba(178, 178, 178, 0.5);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    visibility: visible;
    .img {
      width: 101.5%;
      position: absolute;
      top: 133px;
      right: -3px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
      pointer-events: none;
    }
  `,

  Year: styled.span`
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-family: "Do Hyeon";
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    line-height: 49px;
    left: 47px;
    top: 34px;
  `,

  Line1: styled.div`
    position: absolute;
    width: 133px;
    border-bottom: 2px solid black;
    left: 27px;
    top: 81px;
  `,

  Page: styled.p`
    font-family: BM HANNA;
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0.15em;
    text-align: left;
    left: 66px;
    top: 90px;
  `,

  Info: styled.p`
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-family: "Noto Sans KR";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    bottom: 63px;
    width: 344px;
    height: 211px;
    left: 29px;
  `,

  Title: styled.p`

    left: 320px;
    position: absolute;
    margin: 0px;
    padding: 0px;
    top: 340px;
    font-family: "Do Hyeon";
    font-size: 65px;
  `,

  Line2: styled.div`
    top:410px;
    left: 320px;
    position: absolute;
    border-bottom: 4px solid #ef6268;
    width: 340px;
  `,

  Desc: styled.p`
  top:430px;
    left: 320px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #585858;
    line-height: 30px;
  `,
};
