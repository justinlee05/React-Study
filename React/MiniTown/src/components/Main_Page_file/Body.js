import React from "react";
import { useHistory } from "react-router";
import Logic from "./Logic";
import Logic2 from "./Logic2";
import Logic3 from "./Logic3";
import Logic4 from "./Logic4";

function Body() {
  const history = useHistory();
  return (
    <div className="Body_box">
        <div className="Logic_array">
            <Logic/>
            <Logic2/>
            <Logic3/>
            <Logic4/>
        </div>
    </div>
  )
}

export default Body;
