import React from "react";
import Confirm_background from "./img/백그라운드.png"
import arrow from "./img/화살표.png"
function Confirm(){
    return(
        <div className="Confirm_BackGround">
            <img width="1520px" height="560px" src={Confirm_background}/>
            <div className="Confirm_text_box">
                <div className="Confirm_text">
                    <span className="Confirm_text_title">가입되어있는 동호회 확인</span>
                    <img src={arrow} className="Confirm_text_arrow"/>
                </div>
                <div className="blue_line"></div>
            </div>
        </div>
    )
}

export default Confirm