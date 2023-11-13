import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1>Counter</h1>
      <div className="flex gap-2">
        <button
          className="w-16 h-16 text-3xl bg-gray-100 active:translate-y-2 transition-all "
          onClick={() => setCount((p) => p - 1)}
        >
          -
        </button>
        <div className="w-16 h-16 text-3xl font-bold bg-gray-300 rounded-lg flex items-center justify-center">
          {count}
        </div>
        <button
          className="w-16 h-16 text-3xl bg-gray-100 active:translate-y-2 transition-all "
          onClick={() => setCount((p) => p + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
