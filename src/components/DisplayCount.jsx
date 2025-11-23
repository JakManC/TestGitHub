import React from "react";
import useCounterStore from "../../countStore";

function DisplayCount() {
  const initialCount = useCounterStore((state) => state.initialCount);
  return (
    <div>
      <h1>The Count Value Is : {initialCount} </h1>
    </div>
  );
}

export default DisplayCount;
