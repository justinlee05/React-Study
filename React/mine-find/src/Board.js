import React, { useState } from "react";
import { S } from "./styles";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function addBomb(ranX,ranY,arr){
    for (let i=0;i<1;i++){
        
        /* if (arr[ranY][ranX].number===-1){
            i++;
            continue;
        } */
        arr[ranY][ranX].number = -1;
        
        console.log(`X : ${ranX} Y : ${ranY}`);
        console.log(`X : ${ranX} Y : ${ranY}`);
        
    }
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

function Board(){
    const count = [0,1,2,3,4,5,6,7,8,9];
    const subarr = [];
    for (let i=0;i<10;i++){
        subarr.push([]);
        for (let k=0;k<10;k++){
            subarr[i].push({
                posX:k,
                posY:i,
                number:0,
                pos:k+','+i
            })
        }
    }
    console.log(count)
        
    const [board,setBoard] = useState(subarr)
    addBomb(5,7,subarr);
    addBomb(9,7,subarr)
    findBomb(5,7,subarr);
    findBomb(9,7,subarr);
    

  console.log(subarr);
  console.log(board[0][0].number)

  

    return(    
        <>
    {count.map(index=> (
      <S.Row> 
      {count.map(value => (
        <S.Block style={subarr[index][value].number === -1 ? {backgroundColor:'red'}:{backgroundColor:'lightgray'}}>{subarr[index][value].number > 0 ?  subarr[index][value].number  : '' }</S.Block>
      ))}
      </S.Row>
    ))}
    </>
        
    )
}


export default Board;