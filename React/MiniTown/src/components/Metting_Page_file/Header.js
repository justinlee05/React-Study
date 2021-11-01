import React from "react";
import { useHistory } from "react-router";
import Back from "./img/Back.png";
import Plus from "./img/Plus.png";

function Header() {
  const history = useHistory();
  return (
    <div className="Me_Header_box">
      <div className="Me_Header_back">
        <img
          src={Back}
          onClick={() => {
            history.push("/main");
          }}
        />
      </div>
      <div className="Me_Header_title">Mini Town</div>
      <div className="Me_Header_Plus">
        <img
          src={Plus}
          onClick={() => {
            history.push("/Meet");
          }}
        />
      </div>
    </div>
  );
}

export default Header;
