import React, { useState } from "react";
import { genArr } from "../../functions/genArr";
import Block from "../Block/Block";
import { S } from "./style";

function Board({ size }) {
  const length = size; // 크기

  const [board, setBoard] = useState(genArr(length)); // 오목판 배열
  const [color, setColor] = useState(1); // 오목알 색

  const changeBlock = (x, y) => {
    // 오목알 설치 함수
    if (board[y][x].number) {
      alert("어허 거기 이미 깔았잖어");
      return 0;
    }
    setColor(color === 1 ? 2 : 1);
    setBoard(
      board.map((value, index) =>
        value.map((value1, index1) =>
          value1.pos === x + "," + y ? { ...value1, number: color } : value1
        )
      )
    );
  };

  function checkWinner(x, y) {
    var cnt = 0;
    //오른대각 검사
    for (let i = 1; i < 5; i++) {
      // 오른쪽위 검사
      if (x + i >= 0 && x + i < length && y - i >= 0 && y - i < length) {
        if (board[y - i][x + i].number === color) {
          cnt++;
        } else if (
          board[y - i][x + i].number !== color &&
          board[y - i][x + i].number !== 0
        ) {
          break;
        }
      }
    }

    for (let i = 1; i < 5; i++) {
      // 왼쪽아래 검사
      if (x - i >= 0 && x - i < length && y + i >= 0 && y + i < length) {
        if (board[y + i][x - i].number === color) {
          cnt++;
        } else if (
          board[y + i][x - i].number !== color &&
          board[y + i][x - i].number !== 0
        ) {
          break;
        }
      }
    }
    if (cnt > 3) {
      alert("오목!");
      return 0;
    }
    cnt = 0;
    // 왼대각 검사
    for (let i = 1; i < 5; i++) {
      // 왼쪽위 검사
      if (x - i >= 0 && x - i < length && y - i >= 0 && y - i < length) {
        if (board[y - i][x - i].number === color) {
          cnt++;
        } else if (
          board[y - i][x - i].number !== color &&
          board[y - i][x - i].number !== 0
        ) {
          break;
        }
      }
    }

    for (let i = 1; i < 5; i++) {
      // 오른쪽아래 검사
      if (x + i >= 0 && x + i < length && y + i >= 0 && y + i < length) {
        if (board[y + i][x + i].number === color) {
          cnt++;
        } else if (
          board[y + i][x + i].number !== color &&
          board[y + i][x + i].number !== 0
        ) {
          break;
        }
      }
    }
    if (cnt > 3) {
      alert("오목!");
      return 0;
    }
    cnt = 0;

    // 평행 검사
    for (let i = 1; i < 5; i++) {
      // 오른쪽 검사
      if (x + i >= 0 && x + i < length && y >= 0 && y < length) {
        if (board[y][x + i].number === color) {
          cnt++;
        } else if (
          board[y][x + i].number !== color &&
          board[y][x + i].number !== 0
        ) {
          break;
        }
      }
    }

    for (let i = 1; i < 5; i++) {
      // 왼쪽 검사
      if (x - i >= 0 && x - i < length && y >= 0 && y < length) {
        if (board[y][x - i].number === color) {
          cnt++;
        } else if (
          board[y][x - i].number !== color &&
          board[y][x - i].number !== 0
        ) {
          break;
        }
      }
    }
    if (cnt > 3) {
      alert("오목!");
      return 0;
    }
    cnt = 0;

    // 수직 검사
    for (let i = 1; i < 5; i++) {
      // 위쪽 검사
      if (x >= 0 && x < length && y - i >= 0 && y - i < length) {
        if (board[y - i][x].number === color) {
          cnt++;
        } else if (
          board[y - i][x].number !== color &&
          board[y - i][x].number !== 0
        ) {
          break;
        }
      }
    }

    for (let i = 1; i < 5; i++) {
      // 아래쪽 검사
      if (x >= 0 && x < length && y + i >= 0 && y + i < length) {
        if (board[y + i][x].number === color) {
          cnt++;
        } else if (
          board[y + i][x].number !== color &&
          board[y + i][x].number !== 0
        ) {
          break;
        }
      }
    }
    if (cnt > 3) {
      alert("오목!");
      return 0;
    }
    return 0;
  }

  const wrapstyle = {
    // 오목판 사이즈 배경 디자인
    width: `${size * 52 + 5}px`,
    height: `${size * 52 + 5}px`,
  };

  return (
    <>
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
                  checkWinner={checkWinner}
                />
              ))}
            </S.RowAlign>
          ))}
        </S.Background>
      </S.Wrapper>
      <S.Turn
        style={{
          top: `${size * 52 + 10}px`,
        }}
      >
        <S.TurnText style={
            color === 2 ? {color:'black',backgroundColor:'white'} : {color:'white',backgroundColor:'black'}
        }>현재 순서 : {color === 2 ? "하얀색 돌" : "검은색 돌"}</S.TurnText>
        <S.PassButton onClick={()=>{setColor(color === 1 ? 2 : 1);}}>무르기</S.PassButton>
      </S.Turn>
    </>
  );
}

export default Board;
