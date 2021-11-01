import React, { useEffect, useState } from "react";
import game1 from "./img/게임1.png";
import basket1 from "./img/농구1.png";
import basket2 from "./img/농구2.png";
import bad from "./img/배드1.png";
import bae1 from "./img/배구1.png";
import bae2 from "./img/배구2.png";
import soc1 from "./img/축구1.png";
import soc2 from "./img/축구2.png";
import hell from "./img/헬스1.png";
import Back from "./img/Back.png";
import { useHistory } from "react-router";

function Metting() {
  const history = useHistory();
  const [ob1, setob1] = useState([
    // {
    //   pic: bae1,
    //   name: "배구 동호회",
    //   category: "스포츠",
    //   info: "10대 부터 20대 까지 많은 연력층을 보유하고 있는 누구나 참여할 수 있는 동호회입니다.",
    // },
    {
      pic: basket1,
      name: "농구 동호회",
      category: "스포츠",
      info: "길거리에서 스트릿하게 농구할 수 있는 동호회입니다.",
    },
    {
      pic: bad,
      name: "배드 민턴 동호회",
      category: "스포츠",
      info: "배드민턴을 즐기는 그냥 평범한 동호회입니다.",
    },
  ]);
  const [ob2, setob2] = useState([
    {
      pic: soc1,
      name: "축구 동호회",
      category: "스포츠",
      info: "비록 20대가 많지만 많은 분들이 오셔서 자유롭게 커뮤니케이션 하시면서 운동하시면 됩니다.",
    },
    {
      pic: basket2,
      name: "농구 동호회",
      category: "스포츠",
      info: "같이 농구를 즐기는 동호회입니다.",
    },
    {
      pic: hell,
      name: "헬스 동호회",
      category: "스포츠",
      info: "동호회 사람들끼리 열심히 운동하는 운동 동호회입니다.",
    },
  ]);
  const [ob3, setob3] = useState([
    {
      pic: bae2,
      name: "배구 동호회",
      category: "스포츠",
      info: "모두다 참여할 수 있는 자유로운 분위기의 동호회입니다.",
    },
    {
      pic: soc2,
      name: "축구 동호회",
      category: "스포츠",
      info: "40대 아저씨끼리 소소하게 하는 동호회합니다.",
    },
  ]);

  const ob2_map = ob2.map((e) => {
    return (
      <div
        onClick={() => {
          history.push("apply");
        }}
        className="Me_body_MettingBox"
        key={e.name}
      >
        <img src={e.pic} width="320px" height="170px" />
        <div className="Me_body_MettingBox_Text_aria">
          <div div className="Me_body_MettingBox_title">
            {e.name}
          </div>
          <div className="Me_body_MettingBox_categori_text">{e.category}</div>
          <div className="Me_body_MettingBox_Main_Text">{e.info}</div>
        </div>
      </div>
    );
  });
  const ob3_map = ob3.map((e) => {
    return (
      <div className="Me_body_MettingBox" key={e.name}>
        <img src={e.pic} width="320px" height="170px" />
        <div className="Me_body_MettingBox_Text_aria">
          <div div className="Me_body_MettingBox_title">
            {e.name}
          </div>
          <div className="Me_body_MettingBox_categori_text">{e.category}</div>
          <div className="Me_body_MettingBox_Main_Text">{e.info}</div>
        </div>
      </div>
    );
  });

  // const [metting_array,setMetting_array] = useState({
  //     metting_line:[]
  // })
  // useEffect(()=>{
  //     let img_arr_copy = [...metting_array.metting_line];
  //     let img_OB = {
  //         img_url:img_arr.img[index].url,
  //         title:"title",
  //         categori:"categori",
  //         text:"text"
  //     }
  //     img_arr_copy.push(img_OB);
  //     setMetting_array({metting_line:img_arr_copy})
  // },[])
  // const Metting_map = metting_array.metting_line.map((e)=>{
  //     return(
  //         <div className="Me_body_MettingBox" key={e.text}>
  //             <img src={e.img_url} width="320px" height="170px" />
  //             <div className="Me_body_MettingBox_Text_aria">
  //                 <div div className="Me_body_MettingBox_title">{e.title}</div>
  //                 <div className="Me_body_MettingBox_categori_text">{e.categori}</div>
  //                 <div className="Me_body_MettingBox_Main_Text">{e.text}</div>
  //             </div>
  //         </div>
  //   )
  // })

  return (
    <div className="Me_array">
      <div className="oooopppp">
        <div
          onClick={() => {
            history.push("apply");
          }}
          className="Me_body_MettingBox"
        >
          <img src={bae1} width="320px" height="170px" />
          <div className="Me_body_MettingBox_Text_aria">
            <div className="Me_body_MettingBox_title">배구 동호회</div>
            <div className="Me_body_MettingBox_categori_text">스포츠</div>
            <div className="Me_body_MettingBox_Main_Text">
              10대 부터 20대 까지 많은 연력층을 보유하고 있는 누구나 참여할 수
              있는 동호회입니다.
            </div>
          </div>
        </div>
        <div className="Me_body_MettingBox">
          <img src={basket1} width="320px" height="170px" />
          <div className="Me_body_MettingBox_Text_aria">
            <div className="Me_body_MettingBox_title">농구 동호회</div>
            <div className="Me_body_MettingBox_categori_text">스포츠</div>
            <div className="Me_body_MettingBox_Main_Text">
              길거리에서 스트릿하게 농구할 수 있는 동호회입니다.
            </div>
          </div>
        </div>
        <div className="Me_body_MettingBox">
          <img src={bad} width="320px" height="170px" />
          <div className="Me_body_MettingBox_Text_aria">
            <div className="Me_body_MettingBox_title">배드 민턴 동호회</div>
            <div className="Me_body_MettingBox_categori_text">스포츠</div>
            <div className="Me_body_MettingBox_Main_Text">
              배드민턴을 즐기는 그냥 평범한 동호회입니다.
            </div>
          </div>
        </div>
      </div>
      <div className="Me_body_flex">{ob2_map}</div>
      <div className="Me_body_flex">{ob3_map}</div>
    </div>

    // <div className="Me_body_MettingBox">
    //   <img src={img_arr.img[index].url} width="320px" height="170px" />
    //   <div className="Me_body_MettingBox_Text_aria">
    //     <div className="Me_body_MettingBox_title">
    //       배구 동호회 스파이크 팡팡
    //     </div>
    //     <div className="Me_body_MettingBox_categori_text">스포츠</div>
    //     <div className="Me_body_MettingBox_Main_Text">
    //        10대부터 20대 분들까지 다양한 분들이 참여하는 배구 동호회 입니다. 저희
    //       활동은 주로 주말에
    //     </div>
    //   </div>
    // </div>
  );
}

export default Metting;
