import axios from "axios";
import { useHistory } from "react-router";
import { baseurl } from "../App";

export function onReg(
  id,
  password,
  birth,
  name,
  gender,
  phone,
  rand,
  address,
  detailaddr,
  addrcode,
  keyaddr,
  onSuccess
) {
  const body = {
    birth: birth,
    gender: gender,
    id: id,
    name: name,
    password: password,
    phone: phone,
    address: address,
    detailAddress: detailaddr,
    addressCode: addrcode,
    keyAddress: keyaddr,
  };

  axios
    .get(baseurl + "api/auth/check?id=" + id)
    .then((res) => {
      console.log(res);
      if (res.data.data) {
        axios
          .post(baseurl + "api/auth/signup?rand=" + rand, body)
          .then((res) => {
            console.log(res);
            if(res.data.data){
              console.log("성공적 회원가입");
              window.localStorage.setItem("address",address);
              alert("회원가입에 성공한!");
              onSuccess();
            }
            else{
              alert('해당 전화번호로 가입된 계정이 존재합니다.')
            }
          })
          .catch((error) => {
            console.log("Error : " + error);
            alert("회원가입에 실패한.");
          });
      } else {
        alert('이미 존재하는 id입니다.')
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(id, password, birth, name, gender, phone, rand);

}
