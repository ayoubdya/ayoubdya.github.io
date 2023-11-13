import "./App.css";
import { useState } from "react";

const Time = () => {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTimeNow(new Date().toLocaleTimeString());
  }, 1000);

  return <h1>{timeNow}</h1>;
};

export default Time;
