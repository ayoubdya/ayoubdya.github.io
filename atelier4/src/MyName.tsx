import "./App.css";
import { useParams } from "react-router-dom";

function MyName() {
  const { fname, lname } = useParams<{ fname: string; lname: string }>();
  return (
    <div className="App">
      <h1>
        Me Voila {lname?.toUpperCase()}, {fname}
      </h1>
    </div>
  );
}

export default MyName;
