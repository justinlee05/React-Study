import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "220631183080-4mjlsf7m2eqmbba6fge3r56fj9budjc8.apps.googleusercontent.com";

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            email,
            nickname : name
        });
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy='single_host_origin'
                />
        </div>
    )
}