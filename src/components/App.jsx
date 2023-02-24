import React, { useState } from "react";
import Item from "./Item";
import InputArea from "./InputArea";

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
  }

  function handleDeleteItem(id){
    addTask((prevItem) => {
      return prevItem.filter((val, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea handleClick={handleClick} handleChange={handleChange} inputText={inputText}/>
      <div>
        <ul>
          {tasks.map((x, index) => (
            <Item key={index} id={index} text={x} deleteItem={handleDeleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
