import axios from "axios";
import { baseurl } from "../App";


function onAddplace(){
    const info ={
        comment:"테스트입니다.",
            maxMember: 10
    }
    const body = {
        name:"테스트하는 장소",
        mapLocation:"128.417707, 35.289247",
        addressCode:"12345",
        keyAddress:"대전 유성구",
        fullAddress:"일반 주소(지번 주소)",
        detailAddress:"상세 주소(비어도 됨)",
        info:"asdf"
    }
    console.log(baseurl+'api/place 호출');
    console.log(body);
    const headers={
            Authorization:window.localStorage.getItem('access')
        }
    
    console.log(headers);
    axios.put(baseurl+'api/place',{
        name:"테스트하는 장소",
        mapLocation:"128.417707, 35.289247",
        addressCode:"12345",
        keyAddress:"대전 유성구",
        fullAddress:"일반 주소(지번 주소)",
        detailAddress:"상세 주소(비어도 됨)",
        info:"asdf"
    },{
        Authorization:window.localStorage.getItem('access')
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    
}

export default onAddplace;