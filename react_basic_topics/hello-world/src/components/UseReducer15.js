import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducer15() {
  const [count, dispatcher] = useReducer(reducer, initialState);
  return (
    <div>
      count - {count}
      <button onClick={() => dispatcher("increment")}>Increment</button>
      <button onClick={() => dispatcher("decrement")}>Decrement</button>
      <button onClick={() => dispatcher("reset")}>Reset</button>
    </div>
  );
}

export default UseReducer15;
