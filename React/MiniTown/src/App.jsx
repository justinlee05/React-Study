import { Stomp } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register/index";
import Refresh from "./components/Refresh";
import io from "socket.io-client";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
  Link,
} from "react-router-dom";
import Place from "./components/Place";
import onRefresh from "./functions/onRefresh";
import Goods from "./components/Goods";
import Chat from "./components/Chat";
import Metting_Page from './components/Metting_Page_file/Metting_Page';
import Main_PAGE from './components/Main_Page_file/Main_PAGE'
import Setting_PAGE from './components/Setting_Page_file/Setting_PAGE'
import Metting_apply_Page from "./components/Metting_apply/Metting_apply_page";

export const baseurl = "http://54.180.98.98:9094/";
export const wsurl = "http://54.180.98.98:8000/";



function App() {

  const input = useRef();

  

  const roomid = "7728ed86-9c2d-4b99-abfa-c209c301c858";

  

  useEffect(() => {
    console.log(window.localStorage.getItem("access"));
    onRefresh();
  }, []);

  return (
    <BrowserRouter>
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <Register />} />
      <Route exact path="/setting" render={() => <Setting_PAGE />} />
      <Route exact path="/place" render={() => <Place />} />
      <Route exact path="/goods" render={() => <Goods />} />
      <Route exact path="/chat" render={() => <Chat />} />
      <Route exact path="/meet" render={() => <Metting_Page />} />
      <Route exact path="/main" render={() => <Main_PAGE />} />
      <Route exact path="/apply" render={() => <Metting_apply_Page />} />
      <Route exact path='/write' render={()=><></>} />
      <Route exact path="/" render={() => <>
        
      </>} />
    </BrowserRouter>
  );
}

export default App;
