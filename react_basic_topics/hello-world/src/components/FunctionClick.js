import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Event handler using function");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default FunctionClick;
