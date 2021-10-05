import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Board from "./Board";
import { S } from "./styles";

function App() {
  const subarr = [];
  for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
      subarr.push({
        posX: k,
        posY: i,
        pos: k + "," + i,
        index: i * 10 + k,
        number: 0,
        clicked: false,
        flaged: false,
      });
    }
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  };

  const Test = () => {
    const tempnum = getRandomInt(0, 100);
    console.log(tempnum);
    const tempX = tempnum % 10;
    const tempY = parseInt(tempnum / 10);
    console.log(tempX, tempY);
    subarr[tempnum].number = -1;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (
          tempX + j < 0 ||
          tempX + j > 9 ||
          tempY + i < 0 ||
          tempY + i > 9 ||
          subarr[(tempY + i) * 10 + (tempX + j)].number === -1
        ) {
        } else {
          subarr[(tempY + i) * 10 + (tempX + j)].number += 1;
        }
      }
    }
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      Test();
    }
  }, []);

  const [mainarr, setArr] = useState(subarr);
  const checked = [];

  function findEmpty(posX, posY) {
    console.log("findEmpty(", posX, posY, ") 호출됨");

    if (posX < 0 || posX > 9 || posY < 0 || posY > 9) {
      console.log("상하좌우 없음,", posX, posY);
      return;
    }
    // 상하좌우 없는 칸은 안 열기

    if (checked.find((index) => index === posY * 10 + posX)) {
      console.log("이미 확인됨,", posX, posY);
      return;
    }

    if(mainarr[posY*10+posX].clicked){
      console.log('이미 클릭됨',posX,posY);
      return;
    }
    // 닫힌 칸이 아니면 리턴

    console.log(checked.find((index) => index === posY * 10 + posX));
    if (checked.find((index) => index === posY * 10 + posX) === undefined)
      checked.push(posY * 10 + posX); //중복방지
    console.log(checked);

    let count = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (posX + j >= 0 && posX + j <= 9 && posY + i >= 0 && posY + i <= 9) {
          if (mainarr[(posY + i) * 10 + posX + j].number === -1) {
            console.log(posX+j,posY+i,'폭탄 감지됨.')
            count++;
          }
        }
      }
    }
    if (!count) {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (posX + j >= 0 && posX + j <= 9 && posY + i >= 0 && posY + i <= 9)
          if(j===0 && i === 0){

          }
          else{
            findEmpty(posX + j, posY + i);

          }
        }
      }
    }

    return;
  }

  const onClick = (posX, posY) => {
    if (mainarr[posY * 10 + posX].number === -1) {
      alert("폭탄 받아라!");
    }
    findEmpty(posX, posY);
    /* setArr(
      mainarr.map((index) =>
        index.pos === posX + "," + posY
          ? { ...index, clicked: true }
          : { ...index }
      )
    ); */
    setArr(mainarr.map(
      index=> index.index === checked.find(value=> value === index.index) ? {...index,clicked:true} : {...index}
    ))
    console.log(mainarr[posY * 10 + posX].index);
    console.log(posX, posY);
    console.log(mainarr[posY * 10 + posX].pos);
    console.log(mainarr[posY * 10 + posX].clicked);
    console.log(mainarr[posY * 10 + posX].number);
    return;
  };

  return (
    <>
      <Board arr={mainarr} onClick={onClick} />
    </>
  );
}

export default App;
