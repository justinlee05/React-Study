import React, { useState } from "react";
import { S } from "./styles";

function Board(props) {
  function rendering() {
    const result = [];
    const count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const style_bomb = {
        backgroundColor:'red'
    }
    const style_default = {
        backgroundColor:'lightgray'
    }
    
    const style_clicked = {
        backgroundColor:'gray'
    }

    for (let i = 0; i < 10; i++) {
      const temp = (
        <S.Row>
          {count.map((index) => (
            <S.Block style={props.arr[10*i+index].clicked ? props.arr[10*i+index].number === -1 ? style_bomb : style_clicked : style_default}
              index={props.arr[10 * i + index].number}
              onClick={() => {
                props.onClick(index, i);
              }}
            >
              {props.arr[10 * i + index].number > 0 &&
              props.arr[10 * i + index].clicked
                ? props.arr[10 * i + index].number
                : ""}
            </S.Block>
          ))}
        </S.Row>
      );

      result.push(temp);
    }
    return result;
  }
  return rendering();
}

export default Board;
