import React, { useState } from "react";
import Searh_aria from "./Searh_aria";
import Metting from "./Metting";

function Body({allMetting}){
    return(
        <div className="Me_body">
            <Searh_aria/>
            <Metting allMetting={allMetting}/>
            <div className="Me_more">더보기</div>
        </div>
    )
}

export default Body