import React, { useState } from "react";
import { S } from "./listStyle";
import SEARCH from "../../assets/search.png";
import { useHistory } from "react-router";
import axios from "axios";
import { baseurl } from "../../App";
import TITLE from "../../assets/MiniTown2.png";
import Blocks from "./Blocks";
import DOT from "../../assets/listdot.png";
import BACK from "../../assets/placeback2.png";

function GoodsList() {
  const [data, setData] = useState();
  const [onoff, setOnoff] = useState(false);

  const [goods, setGoods] = useState(undefined);
  if (!goods) {
    axios
      .get(baseurl + "api/goods/all/10", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("access"),
        },
      })
      .then((res) => {
        console.log(res);
        setGoods(res.data.data.content);
        console.log(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <S.TotalWrapper>
        <S.Wrapper>
          <S.SearchWrapper>
            <S.InputWrapper>
              <S.Input placeholder="검색어를 입력해주세요." />
              <S.Icon src={SEARCH} />
            </S.InputWrapper>
          </S.SearchWrapper>
        </S.Wrapper>
        <S.ListWrapperWrapper>
          <S.ListWrapper>
            <S.ColumnAlign>
              {goods ? (
                goods.map((value, index) =>
                  (index + 1) % 4 === 1 ? <Blocks data={value} /> : <></>
                )
              ) : (
                <></>
              )}
            </S.ColumnAlign>
            <S.ColumnAlign>
              {goods ? (
                goods.map((value, index) =>
                  (index + 1) % 4 === 2 ? <Blocks data={value} /> : <></>
                )
              ) : (
                <></>
              )}
            </S.ColumnAlign>
            <S.ColumnAlign>
              {goods ? (
                goods.map((value, index) =>
                  (index + 1) % 4 === 3 ? <Blocks data={value} /> : <></>
                )
              ) : (
                <></>
              )}
            </S.ColumnAlign>
            <S.ColumnAlign>
              {goods ? (
                goods.map((value, index) =>
                  (index + 1) % 4 === 0 ? <Blocks data={value} /> : <></>
                )
              ) : (
                <></>
              )}
            </S.ColumnAlign>
          </S.ListWrapper>
        </S.ListWrapperWrapper>
      </S.TotalWrapper>
    </>
  );
}

export default GoodsList;
