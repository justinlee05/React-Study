import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "383642137296-74g65unnhbblqlo5q7rhisjejgb76qpd.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
        console.log(response)
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                buttonText="구글로 로그인"
                style={{border:'1px solid red',width:'200px'}}
                
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}