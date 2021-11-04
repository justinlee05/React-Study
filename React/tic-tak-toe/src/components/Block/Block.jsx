import React, { useEffect } from "react";
import { S } from "./style";


function Block({setBlock,text,border,pos,num}){

    text = text===undefined?0:text;

    useEffect(()=>{
        if(pos){
        
        }
    })

    const bstyle = {
        border:'1px solid black'
    }
    const nstyle = {
        margin:'1.2px',
        borderRadius:"100%",
    }
    const black = {
        backgroundColor:'black'
    }
    const white = {
        backgroundColor:'white'
    }
    return(
        <S.BlockWrapper style={border ? bstyle : num===1 ? {...nstyle,...black} : num===2 ? {...nstyle,...white} : nstyle} onClick={()=>setBlock(pos.x,pos.y)}>
            
        </S.BlockWrapper>
    )
}

export default Block;