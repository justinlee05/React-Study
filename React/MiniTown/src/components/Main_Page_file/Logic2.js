import React from "react";
import { useHistory } from "react-router";
import lo2 from "./img/장소예약.png"

function Logic2() {
  const history = useHistory();
  return (
    <div className="logic_box" onClick={()=>{history.push('/place')}}>
      <div className="logic_img">
        <img src={lo2} width="95px" height="95px" />
      </div>
      <span className="logic_title">장소 예약</span>
      <span className="logic_main_text">
      쉽고 빠르게 모임 장소 <br/>예약을 해보세요
      </span>
    </div>
  );
}

export default Logic2;
