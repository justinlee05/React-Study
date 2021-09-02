import React, { useReducer, useState } from 'react';
import  styled from 'styled-components';
import { style } from './elements';


function List({value, onToggle, onRemove}){
    
    return (
    <>
        {value.map(index => (
            <style.list_li_wrapper key={index.id} onClick={() => {onToggle(index.id);}} style={index.design ? {backgroundColor:'gray',transition:'0.5s'} : {backgroundColor:'rgb(255, 221, 71)',transition:'0.5s'}}>
                <style.list_b>{index.id} : </style.list_b>
                <style.list_li>

                    
                    {index.value}
        
                </style.list_li>
            </style.list_li_wrapper>
      ))}
    </>
    
    )

}

export default List;