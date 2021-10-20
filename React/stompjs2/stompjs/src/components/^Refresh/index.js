import React from "react";
import onRefresh from "../../functions/onRefresh";

function Refresh() {
  return (
    <button
      onClick={() => {onRefresh(
        window.localStorage.getItem("access"),
        window.localStorage.getItem("refresh")
      );
    console.log(window.localStorage.getItem('access'),window.localStorage.getItem('refresh'),'호출됨')}}
    >
      Refresh
    </button>
  );
}

export default Refresh;
