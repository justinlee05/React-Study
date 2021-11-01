import { baseurl, wsurl } from "../../App";
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import Rooms from "./RoomBlock";
import axios from "axios";
import { S } from "./style";
import SEARCH from "../../assets/chatsearch.png";
import MORE from "../../assets/more.png";
import PLAN from "../../assets/plan.png";
import SEND from "../../assets/send.png";
import onRefresh from "../../functions/onRefresh";
import { useHistory } from "react-router";
import NOTICE from '../../assets/notice.png'
import EXIT from '../../assets/exitmenu.png'
import APPLY from '../../assets/applied.png'

const socket = io(
  "http://54.180.98.98:8000/" +
    "?Authorization=" +
    window.localStorage.getItem("access"),
  { transports: ["websocket"] }
);


export function onSelectGoods(id){
  socket.emit(
    "joinRoom",
    `{"chattingRoomId":"${id}","ChatCategory":"GOODS"}`
  );
}

function Chat() {
  const history = useHistory();

  const input = useRef();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connection server");
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });

    socket.on("message", (res) => {
      console.log("msgres:", res);
    });

    socket.on("info", (res) => {
      console.log("info res:", res);
    });

    socket.on("error", (res) => {
      console.log("err :", res);
      if (res.status === 404) {
        onRefresh();
        history.push("/login");
      } else {
        socket.connect();
      }
    });
  }, []);

  const joinRoom = (roomid, cartegory) => {
    socket.emit(
      "joinRoom",
      `{"chattingRoomId":"${roomid}","ChatCategory":"${cartegory}"}`
    ); //방 참여
  };

  const sendMessage = (roomid, message) => {
    socket.emit(
      "sendMessage",
      `{"chattingRoomId":"${roomid}","message":"${message}"}`
    );
  };

  const [rooms, setRooms] = useState(undefined);
  const [selected, setSelect] = useState(false);
  const [chatTitle, setTitle] = useState({
    img: undefined,
    title: undefined,
  });

  const [chatInfo, setChat] = useState([]);
  const [curRoom, setCur] = useState();

  if (!rooms) {
    axios
      .get(baseurl + "api/mypage/chattingroom", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("access")}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        setRooms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSelect = (id) => {
    setCur(id);
    axios
      .get(baseurl + "api/message/" + id + "/10", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("access")}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        const value = res.data.data;

        setChat(
          value.map((value) => {
            return {name:value.name,value:value.message};
          })
        );
        console.log("chat:", chatInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSend = () => {
    console.log(curRoom);
    console.log(input.current.value);
    socket.emit(
      "sendMessage",
      `{"chattingRoomId":"${curRoom}","message":"${input.current.value}"}`
    );
    
    const temp = [{
      name:id,
      value:input.current.value
    }]
    setChat(temp.concat(chatInfo));
    input.current.value = '';
  };


  const [open,setOpen] = useState(false);

  const id = window.localStorage.getItem('id');
  return (
    <>
    <S.MoreWrapper style={open?{visibility:'visible'}:{}}>
      <S.MoreRight style={open?{right:'0px'}:{}}>
        <S.MoreHead>
          <S.Img1 src={EXIT} onClick={()=>{setOpen(false)}} />
          <S.Text1>
            메뉴
          </S.Text1>
        </S.MoreHead>
        <S.Img2 src={NOTICE} />
        <S.Img2 src={APPLY} />
      </S.MoreRight>
    </S.MoreWrapper>
    <S.TotalWrapper>
      <S.ListHeader>
        <S.ListTitle>채팅</S.ListTitle>
        <S.SearchWrapper>
          <S.ListSearch placeholder="사용자 검색" />
          <S.SearchIcon src={SEARCH} />
        </S.SearchWrapper>
      </S.ListHeader>
      <S.ListWrapper>
        {rooms &&
          rooms.map((value) => (
            <Rooms
              name={value.name}
              id={value.id}
              img={value.profile}
              info={value.info}
              setSelect={setSelect}
              setTitle={setTitle}
              onSelect={onSelect}
            />
          ))}
      </S.ListWrapper>
      <S.ChatHeader style={selected ? {} : { display: "none" }}>
        <S.HeadTitleWrapper>
          <S.HeadImg src={chatTitle.img} />
          <S.ChatHeadTitle>{chatTitle.title}</S.ChatHeadTitle>
        </S.HeadTitleWrapper>
        <S.More src={MORE} onClick={()=>{setOpen(true)}} />
      </S.ChatHeader>
      <S.ChatWrapper>
        
          {
            chatInfo.map(value=>
              value.name === id ? <S.MyChat><S.MyChatbox>{value.value}</S.MyChatbox></S.MyChat> :<S.OtherChat>{value.name}<S.OtherChatbox>{value.value}</S.OtherChatbox></S.OtherChat>
            )
          } 
        
      </S.ChatWrapper>
      <S.InputWrapper style={selected ? {} : { display: "none" }}>
        <S.PlanIcon src={PLAN} />
        <S.SendInput ref={input} />
        <S.SendButton
          onClick={() => {
            onSend();
          }}
        >
          <S.SendIcon src={SEND} />
        </S.SendButton>
      </S.InputWrapper>
    </S.TotalWrapper>
    </>
  );
}

export default Chat;
