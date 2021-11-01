import React, { useState } from "react";
import Search from "./img/Search.png";

function Searh_aria() {
  const [onoff, setOnoff] = useState(true);

  const onStyle = {
    backgroundColor: "rgba(73, 147, 250, 1)",
    marginLeft: "10px",
  };
  const offStyle = {
    backgroundColor: "rgba(205, 205, 205, 1)",
    marginLeft: "10px",
  };
  return (
    <div className="Me_body_Search_aria">
      <div className="Me_body_Search_aria_OnOff">
        온라인 모임 / 오프라인 모임
      </div>
      <div className="Me_body_OnOff_input_aria">
        <input
          value="온라인"
          className="Me_body_OnOff_OnlineButton"
          type="button"
          style={onoff ? onStyle : offStyle}
          onClick={() => {
            setOnoff(true);
          }}
        />
        <input
          value="오프라인"
          className="Me_body_OnOff_OfflineButton"
          type="button"
          style={!onoff ? onStyle : offStyle}
          onClick={() => {
            setOnoff(false);
          }}
        />
      </div>
      <div className="Me_body_Search_aria_Search">검색</div>
      <div className="Me_body_Search_aria_Search_box">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          className="Me_body_Search_aria_Search_box_input"
        />
        <div className="Me_body_Search_aria_Search_box_img">
          <img src={Search} />
        </div>
      </div>
      <div className="Me_body_Search_aria_Search_box_line"></div>
      <div className="Me_body_Search_aria_categori">카테고리</div>
      <div className="Me_body_Search_aria_flex">
        <input
          value="스포츠"
          className="Me_body_OnOff_OnlineButton"
          type="button"
          style={onStyle}
        />
        <input
          value="음악"
          className="Me_body_OnOff_OfflineButton"
          type="button"
          style={offStyle}
        />
        <input
          value="여행"
          className="Me_body_OnOff_OnlineButton"
          type="button"
          style={offStyle}
        />
        <input
          value="수공예"
          className="Me_body_OnOff_OfflineButton"
          type="button"
          style={offStyle}
        />
        <input
          value="기타"
          className="Me_body_OnOff_OnlineButton"
          type="button"
          style={offStyle}
        />
        <input
          value="스터디"
          className="Me_body_OnOff_OfflineButton"
          type="button"
          style={offStyle}
        />
      </div>
    </div>
  );
}

export default Searh_aria;
