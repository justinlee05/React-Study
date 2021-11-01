import React from "react";
import { S } from "./style";
import NONE from '../../assets/NONE.png'

function Rooms({ name, id, img, info, setSelect, setTitle,onSelect}) {
  
    const onClick = () => {
        if(!img.length){
            setTitle({
                img:NONE,
                title:name
            })
        }
        else{
            setTitle({
                img:img,
                title:name
            })
        }
        setSelect(true);
        onSelect(id);
    }
  return (
    <S.BlockWrapper onClick={()=>{onClick()}}>
      <S.BlockImg src={img.length ? img : NONE} />
      <S.BlockTextWrapper>
        <S.BlockTitle>{name}</S.BlockTitle>
        <S.BlockRecent>{info}</S.BlockRecent>
      </S.BlockTextWrapper>
    </S.BlockWrapper>
  );
}

export default Rooms;
