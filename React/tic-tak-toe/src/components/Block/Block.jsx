import React from "react";
import { S } from "./style";

function Block({ setBlock, text, border, pos, num, checkWinner }) {
  text = text === undefined ? 0 : text;
  const bstyle = {
    border: "1px solid black",
  };
  const nstyle = {
    margin: "1.2px",
    borderRadius: "100%",
  };
  const black = {
    backgroundColor: "black",
  };
  const white = {
    backgroundColor: "white",
  };

  const onClick = () => {
    setBlock(pos.x, pos.y);
    checkWinner(pos.x, pos.y);
  };

  return (
    <S.BlockWrapper
      style={
        border
          ? bstyle
          : num === 1
          ? { ...nstyle, ...black }
          : num === 2
          ? { ...nstyle, ...white }
          : nstyle
      }
      onClick={() => {onClick()}}
    ></S.BlockWrapper>
  );
}

export default Block;
