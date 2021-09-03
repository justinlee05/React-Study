import React, { useRef } from 'react';
import { style } from './elements';


function List(props){
    console.log(props.value);
    return (
    <>
        {props.value.map(index => (
            <style.list_li_wrapper key={index.id} onClick={(event) => {event.stopPropagation(); props.onToggle(index.id);}} style={index.design ? {backgroundColor:'gray',transition:'0.5s'} : {backgroundColor:'rgb(255, 221, 71)',transition:'0.5s'}}>
                <style.head_wrapper>
                    <style.list_b>{index.id} : </style.list_b>
                    <style.button_remove onClick={(event) => {event.stopPropagation();props.Delete(index.id);}}  style={index.design ? {visibility:'visible',opacity:'1',transition:'0.3s'}:{visibility:'hidden',opacity:'0',transition:'0.3s'}}>X</style.button_remove>
                </style.head_wrapper>
                <style.list_li onClick={(event) => {event.stopPropagation();props.onEdit(index.id,index.value)}}>
                    {index.value}
                </style.list_li>
            </style.list_li_wrapper>
      ))}
    </>
    
    )

}

export default List;