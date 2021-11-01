import React, { useState } from "react";
import { S } from "./listStyle";
import SearchImg from "../../assets/search.png";
import axios from "axios";
import { baseurl } from "../../App";

function Search() {
  return (
    <S.SearchWrapper>
      <S.SearchHead>
        <S.HeadTitle>검색</S.HeadTitle>
        <S.SearchInputWrapper>
          <S.SearchInput placeholder="검색어를 입력해주세요." />
          <S.SearchImg src={SearchImg} />
        </S.SearchInputWrapper>
      </S.SearchHead>
      <S.SearchFoot>
        <S.FootTitle>카테고리</S.FootTitle>
        <S.CategoryWrapper>
          <S.Category>
            <S.CateText>전체</S.CateText>
          </S.Category>  
        </S.CategoryWrapper>
      </S.SearchFoot>
    </S.SearchWrapper>
  );
}




export default Search;
