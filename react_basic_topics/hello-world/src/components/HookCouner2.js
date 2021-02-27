import React, { useState } from "react";

function HookCouner2() {
  const initalCount = 0;
  const [count, setCount] = useState(initalCount);

  //   const incrementFive = () => {
  //     for (let i = 0; i < 5; i++) {
  //       setCount((prevcount) => prevcount + 1);
  //     }
  //   };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initalCount)}>Reset</button>
      <button onClick={() => setCount((prevcount) => prevcount + 1)}>
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevcount) => prevcount - 1);
        }}
      >
        Decrement
      </button>
      {/* <button onClick={incrementFive}>Inrement 5</button> */}
    </div>
  );
}

export default HookCouner2;
