import React from "react";
import IncreBy1 from "./IncreBy1";
import DecreBy1 from "./DecreBy1";
import DisplayCount from "./DisplayCount";
import NavBar from "./NavBar";

function Count() {
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>

      <div className="allCount text-center">
        <div className="btnDiv flex flex-row justify-around">
          <IncreBy1 />
          <DecreBy1 />
        </div>

        <div className="resultDiv">
          <DisplayCount />
        </div>
      </div>
    </div>
  );
}

export default Count;
