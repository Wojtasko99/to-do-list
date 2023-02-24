import React, {useState} from "react";

function Item(props) {
  const [styleLogic, setStyleLogic] = useState(true);
  const [changedStyle, handleChangedStyle] = useState({
    textDecoration: ""
  });
  
  function handleStyle(){
    styleLogic ? handleChangedStyle({textDecoration: "line-through"}) : handleChangedStyle({textDecoration: ""}) ;
    setStyleLogic(!styleLogic);
  }

  return <li style={changedStyle} onClick={() => {
    props.deleteItem(props.id);
  }}> 
  {props.text} </li>;
}

export default Item;
