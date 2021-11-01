import { useHistory } from "react-router";
import { onSelectGoods } from "../Chat";
import { S } from "./listStyle";
import { ModalOn } from "./ModalOn";

function Blocks(props) {
    console.log(props.data.title);
    console.log(props.data.chattingRoom.id)
    console.log(1231251243124);
    const history = useHistory();
    return (
      <S.BlockWrapper>
        <S.BlockImgWrapper>
          <S.BlockImg src={props.data.image} alt="" />
        </S.BlockImgWrapper>
        <S.BlockTitle>{props.data.title}</S.BlockTitle>
        <S.BlockDate>{props.data.untilDate}까지</S.BlockDate>
        <S.BlockPrice>요청 금액 {props.data.price}원</S.BlockPrice>
      </S.BlockWrapper>
    );
  }

  export default Blocks;