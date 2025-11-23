import React from "react";
import useCounterStore from "../../countStore";

function IncreBy1() {
  const increBy1Method = useCounterStore((state) => state.increBy1Method);
  return (
    <div>
      <button
        className="bg-green-700 text-white p-2 m-2 rounded-full"
        onClick={() => increBy1Method()}
      >
        +1
      </button>
    </div>
  );
}

export default IncreBy1;
