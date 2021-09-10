import React, { useState } from "react";
import { render } from "react-dom";
import { S } from "./styles";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function addBomb(posX,posY,arr){
    
        
       
        arr[posY*10+posX].number = -1;
        console.log(`X : ${posX} Y : ${posY}`);
        
    
}
function findBomb(X,Y,arr){
    for(let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (Y+(i-1)<0 || Y+(i-1)>9 || X+(j-1)<0 || X+(j-1)>9){

            }
            else{
                if (arr[Y+(i-1)][X+(j-1)].number!== -1){
                    arr[Y+(i-1)][X+(j-1)].number += 1;
                }
            }
        }
    }
}

function Board(props){
   
    
    const rendering= () => {
        const result= [];
        for (let i=0;i<10;i++){
            const temp = [];
            for (let j=0;j<10;j++){
                temp.push(<S.Block>{props.array[i][j]}</S.Block>);
            }
            result.push(<S.Row>{temp}</S.Row>)
        }
        return result;

    }

    const result= [];
    const temp = [];
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                temp.push(<S.Block key={j+','+i}>{props.array[i][j]}</S.Block>);
            }
            result.push(<S.Row>{temp}</S.Row>)
        }
    return(    
        <div>
        {temp}    
        </div>
    )
   
}


export default Board;
