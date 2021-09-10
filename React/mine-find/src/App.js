import React, { useState } from 'react';
import Board from './Board';
import { S } from './styles';

function App(){
  
  const subarr = [];
  for (let i=0;i<10;i++){
    for (let k=0;k<10;k++){
        subarr.push({
            posX:k,
            posY:i,
            pos:k+','+i,
            index:i*10+k,
            number:0,
            clicked:false
        })
    }
  }

  const [mainarr ,setArr] = useState(subarr);

  const onClick = (pos) => {
    setArr(
      mainarr.map(index=>index.index === pos ? {...index,clicked:!index.clicked} : {...index})
    )
    console.log(mainarr[pos].number)
    console.log(pos)
    console.log(mainarr[pos].pos)
    addBomb(1,2)
  }

  const addBomb = (posX,posY) =>{
    setArr(
      mainarr.map(index => 
          index.index === (posY*10+posX) ? {...index,number:-1} : {...index}
      )
    )
    console.log(`X : ${posX} Y : ${posY}`);
  }

























  const rendering = () => {
    const result = [];
    const count = [0,1,2,3,4,5,6,7,8,9];
    
    for(let i=0;i<10;i++){
      const temp =(
      <S.Row>
        {
        count.map( index=>
          <S.Block index={mainarr[10*i+index].number} onClick={()=> {onClick(10*i+index)}}>
            {mainarr[10*i+index].number>0 && mainarr[10*i+index].clicked ? mainarr[10*i+index].number : ''}
          </S.Block>
        )
        }
      </S.Row>  
      )
      
      result.push(temp)
      
      
    }
    return result
  }
  console.log(rendering());
  
  return(
    <>
    {rendering()}   
    </>
  )

}

export default App;