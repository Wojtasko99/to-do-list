import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [inputText, handleInput] = useState("");
  const [tasks, addTask] = useState([]);

  function handleChange(e) {
    handleInput(e.target.value);
  }

  function handleClick() {
    addTask((x) => {
      return [...x, inputText];
    });
    handleInput("");
    console.log(tasks);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((x) => (
            <Item text={x} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
