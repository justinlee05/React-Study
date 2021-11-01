import React from "react";
import Version_ from "./img/버전.png";
import Account from "./img/계정변경.png";
import "./Setting_Page.css";
import { useHistory } from "react-router";


function Setting_PAGE() {
  const history = useHistory();
  return (
    <div>
      <div className="Header_bar">
        <div className="arrow" onClick={()=>{history.push('/main')}}>
          <svg
            width="40"
            height="27"
            viewBox="0 0 40 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5811 15.4852C38.5649 15.4863 39.3632 14.6896 39.3643 13.7058C39.3653 12.7221 38.5686 11.9238 37.5849 11.9227L37.5811 15.4852ZM0.69981 12.4058C0.00346004 13.1007 0.00227758 14.2285 0.697169 14.9248L12.0211 26.2725C12.716 26.9689 13.8438 26.9701 14.5402 26.2752C15.2365 25.5803 15.2377 24.4525 14.5428 23.7561L4.47709 13.6693L14.5639 3.60357C15.2603 2.90868 15.2615 1.78085 14.5666 1.0845C13.8717 0.388151 12.7438 0.386969 12.0475 1.08186L0.69981 12.4058ZM37.5849 11.9227L1.95989 11.8854L1.95616 15.4479L37.5811 15.4852L37.5849 11.9227Z"
              fill="black"
            />
          </svg>
        </div>
        <span className="Setting_title">설정</span>
      </div>
        <div className="Setting_Element">
            <img width="38px" height="38px" src={Version_}/><span className="Setting_Element_text">버전 V1</span>
        </div>
        <hr/>
        <div className="Setting_Element">
            <img width="31px" height="38px" src={Account}/><span className="Setting_Element_text">계정 전환</span>
        </div>
        <hr/>
    </div>
  );
}

export default Setting_PAGE;
