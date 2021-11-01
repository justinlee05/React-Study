import DaumPostcode from 'react-daum-postcode';
import React from 'react';


const FindAddr = (props) => {

    const postCodeStyle = {
      display: "block",
      position: "absolute",
      top: "0px",
      zIndex: "100",
      padding: "0px",
      border:'1px solid black'
    }

    const handleComplete = (res) =>{
        console.log(res)
        const addressCode = res.zonecode;
        window.localStorage.setItem('zoneCode',addressCode);
        const add = res.address;
        const building = res.buildingName;
        const keyaddress = res.bname+' '+res.bname1;
        window.localStorage.setItem('keyaddr',keyaddress);
        console.log(keyaddress);
        console.log(add,building);
        console.log(addressCode);
        props.locate.current.value = add+' '+building;
        props.setIspopup(false);
    }
    
	return (
    	<DaumPostcode
          onComplete={handleComplete}
          style={postCodeStyle}
          height={900}
        />
    )
}

export default FindAddr;