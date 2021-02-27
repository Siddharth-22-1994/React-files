import React, { useState } from "react";
import { useEffect } from "react";

function HookSideEffectCount() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={incrementCount}>Click Me {count}</button>
    </div>
  );
}

export default HookSideEffectCount;
