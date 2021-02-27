import React, { useState } from "react";
import { useEffect } from "react";

function HookConditiEffect5() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   console.log("UseEffect --> Updating Component");
  //   document.title = `You Clicked ${count} times`;
  // }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button> */}
    </div>
  );
}

export default HookConditiEffect5;
