import React, { useEffect, useState } from "react"
import Header from "./Header"
import Body from "./Body"
import "./Metting_Page.css"
import axios from "axios"

function Metting_Page() {
    const [allMetting,setAllMetting] = useState({})
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://54.180.98.98:9094/api/meetings/" + 10,
            headers: {
                Authorization:
                  "Bearer " +
                  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VyIiwiYXVkIjoiTE9DQUwiLCJpc3MiOiJBZG1pbiIsImV4cCI6MTYzNTYzMDQyNn0.1Ahtwt_cItYAqXYCfEwD_MzjdFpkf1Aza7IE0RfIYsPThFkg9U06SyU4o3hEzvNFRuOYM8fCzeLizeC3Y5rNxw",
            }
        })
        .then((res)=>{
            console.log(res)
            setAllMetting(res.data.data.content);
        })
    },[])
    return(
        <div className="metting_all">
            <Header/>
            <Body allMetting={allMetting}/>
        </div>
    )
}

export default Metting_Page