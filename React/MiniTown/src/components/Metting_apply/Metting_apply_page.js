import React from "react";
import "./Metting_apply_page.css";
import back from "./Back2.png";
import Bae from "./bae.png";
import { useHistory } from "react-router";

function Metting_apply_Page() {
    const history = useHistory();
  return (
    <div className="apply">
      <div className="apply_Header_bar">
        <img onClick={()=>{history.push('/meet')}}
          className="apply_Header_back"
          width="45px"
          height="45px"
          src={back}
        />
        Mini Town
      </div>
      <div className="apply_body_box">
        <img src={Bae} />
        <div className="apply_body_line1">
          <div className="apply_title">배구 동호회</div>
          <div className="apply_category">스포츠</div>
          <div className="apply_online">온라인</div>
        </div>
        <div className="apply_body_line2">
          <div className="apply_blue"></div>
          <div className="apply_body_text">
            설명 : 한밭체육관은 운영시간이 07:00 ~ 20:00시 까지로 이시간 사이
            <br />
            로는 마음대로 예약이 가능합니다
          </div>
        </div>
        <div
          className="apply_body_apply"
          onClick={() => {
            alert("신청성공");
          }}
        >
          예약하기
        </div>
      </div>
    </div>
  );
}

export default Metting_apply_Page;
