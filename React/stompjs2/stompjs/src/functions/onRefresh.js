import axios from "axios";
import { baseurl } from "../App";

function onRefresh(){
    const body = {
        accessToken:window.localStorage.getItem('access'),
        refreshToken:window.localStorage.getItem('refresh')
    }
    console.log(baseurl+'api/auth/reissue','로',body,'넣고 호출함')
    axios.post(baseurl+'api/auth/reissue',body)
    .then(res=>{
        console.log(res)
        console.log(res.data.data)
        window.localStorage.setItem('access',res.data.data.accessToken);
        window.localStorage.setItem('refresh',res.data.data.refreshToken);
    })
    .catch(err=>console.log(err))



}

export default onRefresh;