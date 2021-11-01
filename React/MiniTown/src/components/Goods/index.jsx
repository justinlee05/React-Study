import React from "react";
import { S } from "./style";
import BACK from "../../assets/placeback.png";
import TITLE from "../../assets/MiniTown2.png";
import CHATTING from "../../assets/Chatting.png";
import PLUS from "../../assets/Plus.png";
import GoodsList from "./List";
import { useHistory } from "react-router";

function Goods() {
  const history = useHistory();

  return (
    <>
      <S.Header>
        <S.BackButton
          onClick={() => {
            history.push("/main");
          }}
          src={BACK}
        />
        <S.Chatting src={CHATTING} />
        <S.Plus src={PLUS} />
        <S.Title src={TITLE} />
      </S.Header>
      <GoodsList />
    </>
  );
}

export default Goods;
