import React from "react";
import DisplayCount from "./components/DisplayCount";
import IncreBy1 from "./components/IncreBy1";
import DecreBy1 from "./components/DecreBy1";

function App() {
  return (
    <div className="mainDiv">
      <h1
        className="
      bg-orange-700 text-white p-2 m-2 rounded-full text-center
      "
      >
        This Is Initial Counter File....
      </h1>

      <div className="countDiv text-center">
        <div className="btnDiv flex flex-row justify-around">
          <IncreBy1 />
          <DecreBy1 />
        </div>
        <DisplayCount />
      </div>
    </div>
  );
}

export default App;
