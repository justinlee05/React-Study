import React from "react";
import styled from "styled-components";
import { S } from "./style";

import HImg1 from "../assets/images/HistoryImg1.png";
import HImg2 from "../assets/images/HistoryImg2.png";
import HImg3 from "../assets/images/HistoryImg3.png";
import HImg4 from "../assets/images/HistoryImg4.png";
import HImg5 from "../assets/images/HistoryImg5.png";
import HImg6 from "../assets/images/HistoryImg6.png";

const Himgs = {
  0: HImg1,
  1: HImg2,
  2: HImg3,
  3: HImg4,
  4: HImg5,
  5: HImg6,
};

const comment = {
  0: "초대 교장선생님이신 최부영 선생님의 권유로 시작된 EntryDSM은 2016년 V1을 출시하여 학생들이 프로덕션 환경의 시스템을 구현하고 운영하는 데 있어 전반적인 기반을 다졌습니다.",
  1: "V1에서 수많은 학생과 교사분들께 받았던 피드백을 바탕으로 서비스 품질을 개선하기 위해 매진하였고, 이에 아키텍처 설계를 고려하는 등 안정적인 시스템을 구현할 수 있도록 노력했습니다.",
  2: "현업에서 자주 이용되는 기술 스택을 기반으로 시스템을 구성하여 사용자 UI, 원서 출력 기능 등 다양한 기능들을 안정적 이용과 성능 향상에 주력하여 시스템의 완성도를 높였습니다.",
  3: "V3 시스템의 성능 한계를 극복하기 위해 비동기 프로그래밍을 적용하였고, 실시간 시스템 모니터링 및 배포 파이프라인 구성으로 구성원의 작업 환경을 개선했습니다.",
  4: "오랜 기간 서비스를 개발과 운영해온 경험을 살려 올해도 안정적으로 입학 전형 시스템을 제공합니다.",
  5: "좀더 간편한 입학전형 시스템을 제공 해드리고 싶어서 새로운 마음으로 메인 컬러와 여러 기능을 개선하였습니다.",
};

const lstyle = {
  left: "0px",
};

const curstyle = {
  zIndex: 3,
  marginLeft: "200px",
  backgroundColor: "white",
};

const rstyle = {
  marginLeft: "400px",
};

const defstyle = {
  zIndex: 1,
  marginLeft: "210px",
  visibility: "hidden",
};

const RenderingContent = (props) => {
const result = [];
  for (let i = 0; i < 6; i++) {
    result.push(
      <S.Slides
        style={
          i === props.current
            ? curstyle
            : i === props.left
            ? lstyle
            : i === props.right
            ? rstyle
            : defstyle
        }
        onClick={props.onClick(i)}
      >
        <S.Year>{2016 + i}</S.Year>
        <S.Line />
        <S.Page>{i + 1}장</S.Page>

        <img className="img" src={Himgs[i]} alt={"asdf"}></img>
        <S.Info>{comment[i]}</S.Info>
      </S.Slides>
    );
  }
  return result;
};

export default RenderingContent;
