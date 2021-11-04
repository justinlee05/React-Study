import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import { S } from "./style";

function Board({ size }) {
  const length = size;

  function genArr() {
    const base = [];
    for (let i = 0; i < length; i++) {
      const temp = [];
      for (let j = 0; j < length; j++) {
        temp.push({
          pos: j + "," + i,
          number: 0,
        });
      }
      base.push(temp);
    }
    return base;
  }

  useEffect(() => {
    console.log(board);
  }, []);

  const [board, setBoard] = useState(genArr());

  const [color, setColor] = useState(1);

  const changeBlock = (x, y) => {
      console.log((board[y][x].number))
    if (board[y][x].number) {
        alert('어허 거기 이미 깔았잖어');
      return 0;

    }
    setColor(color === 1 ? 2 : 1);
    console.log(x, y);
    setBoard(
      board.map((value, index) =>
        value.map((value1, index1) =>
          value1.pos === x + "," + y ? { ...value1, number: color } : value1
        )
      )
    );
  };

  const wrapstyle = {
    width: `${size * 52 + 5}px`,
    height: `${size * 52 + 5}px`,
  };

  return (
    <S.Wrapper style={wrapstyle}>
      <S.Borders>
        {" "}
        {/* 이건 선긋기용 블록들 */}
        {board.map((value, index) =>
          index !== length - 1 ? (
            <S.RowAlign key={index}>
              {board[index].map((value1, index1) =>
                index1 !== length - 1 ? (
                  <Block
                    key={(index + 1) * (index1 + 1)}
                    text={9}
                    border={true}
                  />
                ) : (
                  ""
                )
              )}
            </S.RowAlign>
          ) : (
            ""
          )
        )}
      </S.Borders>

      <S.Background>
        {" "}
        {/* 이게 클릭되는 블록들 */}
        {board.map((value, index) => (
          <S.RowAlign key={index}>
            {board[index].map((value1, index1) => (
              <Block
                key={(index + 1) * (index1 + 1)}
                setBlock={changeBlock}
                pos={{ x: index1, y: index }}
                num={board[index][index1].number}
              />
            ))}
          </S.RowAlign>
        ))}
      </S.Background>
    </S.Wrapper>
  );
}

export default Board;
