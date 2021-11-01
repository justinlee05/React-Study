import React from "react";
import PlaceMap from "./Map";
import { S } from "./style";
import PlaceList from "./List";
import BACK from "../../assets/placeback.png";
import TITLE from "../../assets/MiniTown.png";
import { useHistory } from "react-router";
import Search from "./List";
import BlocksList from "./Blocks/blocks";

function Place() {
  const history = useHistory();
  return (
    <>
      <S.BackButton
        src={BACK}
        onClick={() => {
          history.push("/main");
        }}
      />
      <S.Header>
        <S.Title src={TITLE} />
      </S.Header>
      <S.Wrapper>
        <S.Body>

            <BlocksList />
        </S.Body>
      </S.Wrapper>
    </>
  );
}

export default Place;
