import React from "react"
import Header from "./Header_";
import Body from "./Body";
import Banner from "./img/Banner2.png";
import Confirm from "./Confirm";
import "./Main_Page.css"

function Main_PAGE() {
  return (
    <div className="App">
      <Header/>
      <div className="Banner_plus_Body">
        <img src={Banner} width="1520px" height="520px"/>
        <Body/>
      </div>
      <Confirm/>
    </div>
  );
}

export default Main_PAGE
;
