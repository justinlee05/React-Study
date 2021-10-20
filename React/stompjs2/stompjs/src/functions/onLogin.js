import { waitForDomChange } from "@testing-library/dom";
import axios from "axios";
import { baseurl } from "../App";
export function onLogin(id, password) {
  

  const body = {
    id: id,
    password: password
  };
  axios.post(baseurl + "api/auth/login", body)
  .then((res) => {
      console.log(res);
      console.log('성공적 로그인');
      alert('로그인에 성공한!');
      
      window.localStorage.setItem('access',res.data.data.accessToken);
      window.localStorage.setItem('refresh',res.data.data.refreshToken);
      console.log(window.localStorage.getItem('access'));
      console.log(window.localStorage.getItem('refresh'))
    })
  .catch(error=> {
      console.log('Error : '+error);
      alert('로그인에 실패한.');
    })
}
