import axios from 'axios';
import { useEffect, useState } from 'react';

function OAuth() {
  const [ data, setData ] = useState(null);

  const oAuthURL = 
  `https://accounts.google.com/o/oauth2/v2/auth?client_id=383642137296-74g65unnhbblqlo5q7rhisjejgb76qpd.apps.googleusercontent.com&
response_type=token&
redirect_uri=https://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`

  

  useEffect(()=>{
    console.log(window.location.assign(oAuthURL))
    
    const url = new URL(window.location.href);
    //? hash를 떼어주고
    const hash = url.hash;
    if (hash) {
      //? 토큰만 떼어주면된다.
      const accessToken = hash.split("=")[1].split("&")[0];
      console.log('accesstoken:',accessToken)
      //? 토큰을 이용한 api 요청.
    axios.get('https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken, { 
        headers: { 
          authorization: `token ${accessToken}`, 
          accept: 'application/json' 
        }})
        .then(data => {
          setData(data);
      }).catch(e => console.log('oAuth token expired'));
    }
  }, [])

  return (
    <div>
      <button id="oAuthBtn">
        
        <div id="comment">구글 OAuth</div>
      </button>
    </div>
  );
}

export default OAuth