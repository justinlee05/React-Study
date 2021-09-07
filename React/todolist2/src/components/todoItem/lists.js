import React, { useRef } from 'react';
import { S } from '../style/elements';


function List(props){
    console.log(props.value);
    return (
    <>
        {props.value.map(index => (
            <S.ListliWrapper key={index.id} onClick={(event) => {event.stopPropagation(); props.onToggle(index.id);}} style={index.design ? {backgroundColor:'gray',transition:'0.5s'} : {backgroundColor:'rgb(255, 221, 71)',transition:'0.5s'}}>
                <S.HeadWrapper>
                    <S.Listb>{index.id} : </S.Listb>
                    <S.ButtonRemove onClick={(event) => {event.stopPropagation();props.Delete(index.id);}}  style={index.design ? {visibility:'visible',opacity:'1',transition:'0.3s'}:{visibility:'hidden',opacity:'0',transition:'0.3s'}}>X</S.ButtonRemove>
                </S.HeadWrapper>
                <S.Listli onClick={(event) => {event.stopPropagation();props.onEdit(index.value,index.id)}}>
                    {index.value}
                </S.Listli>
            </S.ListliWrapper>
      ))}
    </>
    
    )

}

export default List;