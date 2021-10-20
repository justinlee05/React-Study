import { Stomp } from "@stomp/stompjs";
import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import Refresh from "./components/^Refresh";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import webstomp from "webstomp-client";
import GoogleLoginBtn from "./functions/Oauth2";

export const baseurl = "http://13.125.0.94:9094/";
export const wsurl = "ws://13.125.0.94:9094/";

var socket = new SockJS("http://13.125.0.94:9094/websocket/");
var stompClient = webstomp.over(socket);

function App() {
  const url = wsurl + "websocket";

  useEffect(() => {
    console.log(window.localStorage.getItem("니이름"));
    const header = {
      token: window.localStorage.getItem("access"),
    };
    const error_callback = (err) => {
      console.log(err);
    };
    const connect_callback = (info) => {
      console.log(info);
    };
    stompClient.connect({}, connect_callback, error_callback);
  }, []);

  /* const connect = () => {
    const client = new StompJs.Client({
      brokerURL: "ws://13.125.0.94:9093/websocket/", // 웹소켓 서버로 직접 접속
      // webSocketFactory: () => new SockJS("/ws-stomp"), // proxy를 통한 접속 
      connectHeaders: {
        token: window.localStorage.getItem("access"),
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("connected");
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.activate();
  }; */

  useEffect(() => {
    console.log(window.localStorage.getItem("access"));
  }, []);

  return (
    <div className="App">
      <Register />
      <Login />
      <Refresh />
      <GoogleLoginBtn />
    </div>
  );
}

export default App;
