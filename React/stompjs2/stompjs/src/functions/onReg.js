import axios from "axios";
import { baseurl } from "../App";

export function onReg(id, password, name, phone) {
  const body = {
      birth: "2021-10-20",
      gender: "MEN",
      id: id,
      name: name,
      password: password,
      phone: phone
    }
  ;
  axios.post(baseurl + "api/auth/signup", body)
  .then((res) => {
      console.log(res);
      console.log('성공적 회원가입');
      alert('회원가입에 성공한!');
    })
  .catch(error=> {
      console.log('Error : '+error);
      alert('회원가입에 실패한.');
    })
}
