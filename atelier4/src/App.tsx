import "./App.css";

function App() {
  const name = "DYA Ayoub".split(" ");

  return (
    <div className="App">
      <h1>
        Me Voila {name[0]}, {name[1]}
      </h1>
    </div>
  );
}

export default App;
