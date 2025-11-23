import React from "react";
import useCountStore from "../../countStore";

function DecreBy1() {
  const decreBy1Method = useCountStore((state) => state.decreBy1Method);
  return (
    <div>
      <button
        className="bg-red-700 text-white p-2 m-2 rounded-full"
        onClick={() => decreBy1Method()}
      >
        -1
      </button>
    </div>
  );
}

export default DecreBy1;
