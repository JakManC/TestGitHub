import React from "react";
import NavBar from "./NavBar";
import useCountStore from "../../countStore";
import useCounterStore from "../counterStore";

function Counter() {
  const counterArray = useCounterStore((state) => state.counterArray);
  return (
    <div>
      <div className="navDiv">
        <NavBar />
      </div>

      <div className="counterDiv text-center m-3">
        {/* <ul>
          {counterArray.map((counter) => (
            <li key={counter.id}>
              Counter : {counter.id}, Value :{counter.value}
            </li>
          ))}
        </ul> */}

        <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <tr>
              <th className="py-4 px-6 text-left text-lg font-semibold">
                Counter
              </th>
              <th className="py-4 px-6 text-left text-lg font-semibold">
                Value
              </th>
            </tr>
          </thead>

          <tbody>
            {counterArray.map((counter) => (
              <tr
                key={counter.id}
                className="border-b hover:bg-blue-50 transition-all duration-200"
              >
                <td className="py-3 px-6 text-gray-700">{counter.id}</td>
                <td className="py-3 px-6 text-gray-700">{counter.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Counter;
