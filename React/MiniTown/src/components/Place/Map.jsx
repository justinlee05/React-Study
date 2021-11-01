import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { S } from "./mapStyle";
import dot from '../../assets/listdot.png'

function PlaceMap() {
    
    useEffect(() => {
/*     onMapClick(36.350554705493096, 127.38482378416651);
 */    onFirstjoin();
  }, []);

  const [address, setAddr] = useState("");
  const [gu, setGu] = useState("");
  const REST_API_KEY = "2e40fee816400dbc0f73909015a27984";
  const [corona,setCorona] = useState({
      유성구:1809,
      대덕구:904,
      중구:1029,
      서구:2664,
      동구:1108
  })
  
  const onFirstjoin = () => {
      const addr = window.localStorage.getItem('address');
      axios.get("https://dapi.kakao.com/v2/local/search/address.json?query="+addr,{
          headers: {
              Authorization: "KakaoAK "+REST_API_KEY,
        },
      })
      .then(res => {
          console.log(res);
          console.log(res.data.documents[0])
          
          const x = res.data.documents[0].x;
          const y = res.data.documents[0].y;
          
          window.localStorage.setItem('x',x);
          window.localStorage.setItem('y',y);
          
          onMapClick(y,x);
        })
    }
    const [position, setPosition] = useState({
      lat: window.localStorage.getItem('y'),
      lng: window.localStorage.getItem('x'),
    });
    
    const onMapClick = (Y, X) => {
    console.log(X, Y);
    axios
      .get(
        "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=" +
          X +
          "&y=" +
          Y,
        {
          headers: {
            Authorization: "KakaoAK "+REST_API_KEY,
          },
        }
      )
      .then((res) => {
        setAddr("");
        const addr = res.data.documents[0].address;
        const roadaddr = res.data.documents[0].road_address;
        console.log(addr);
        console.log(roadaddr);
        console.log(addr.region_2depth_name);
        setGu(addr.region_2depth_name);

        if (roadaddr && roadaddr.building_name) {
          console.log(roadaddr.building_name);
          setAddr(roadaddr.building_name);
          console.log("1");
        } else if (roadaddr && roadaddr.address_name) {
          console.log(roadaddr.address_name);
          setAddr(roadaddr.address_name);
          console.log("2");
        } else if (addr.address_name) {
          console.log(addr.address_name);
          setAddr(addr.address_name);
          console.log("3");
        } else {
          setAddr("");
          console.log("4");
        }
      });
  };

  return (
    <S.MapWrapper>
      <S.Head>
          <S.HeadTitle>당신 주변의{<S.MidTitle>{" 코로나 "}</S.MidTitle>}현황</S.HeadTitle>
      </S.Head>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: window.localStorage.getItem('y'),
          lng: window.localStorage.getItem('x'),
        }}
        style={{
          // 지도의 크기
          width: "1000px",
          height: "450px",
          position:'absolute',
          zIndex:'0',
          marginTop:'50px'
        }}
        level={2} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => {
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          });
          onMapClick(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
        }}
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: position.lat,
            lng: position.lng,
          }}
        />
        <CustomOverlayMap
          position={{ lat: position.lat, lng: position.lng }}
          yAnchor={1}
        >
          <S.BoxWrapper>
            <S.MarkerBox className="customoverlay">
              <span className="title">{address}</span>
              <S.BoxArrow>
                <S.ArrText>></S.ArrText>
              </S.BoxArrow>
            </S.MarkerBox>
          </S.BoxWrapper>
        </CustomOverlayMap>
      </Map>
      <S.FootWrapper>
          <S.FootTextWrapper>
              <S.Dot src={dot}/>
              <S.FootTextSubject>{"거리 두기 단계:"}</S.FootTextSubject>
            <S.FootTextValue>3단계</S.FootTextValue>
          </S.FootTextWrapper>
          <S.FootTextWrapper>
              <S.Dot src={dot}/>
              <S.FootTextSubject>{"누적 확진자 수:"}</S.FootTextSubject>
            <S.FootTextValue>{gu === '대덕구' ? corona.대덕구 : gu==='유성구' ? corona.유성구 : gu === '서구' ? corona.서구 : gu === '중구' ? corona.중구 : gu=== '동구'? corona.동구 : ''}명</S.FootTextValue>
          </S.FootTextWrapper>
          
      </S.FootWrapper>
    </S.MapWrapper>
  );
}

export default PlaceMap;
