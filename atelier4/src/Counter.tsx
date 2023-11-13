import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div className="flex gap-2">
        <button onClick={() => setCount((p) => p - 1)}>-</button>
        <button className="text-red-400">{count}</button>
        <button onClick={() => setCount((p) => p + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
