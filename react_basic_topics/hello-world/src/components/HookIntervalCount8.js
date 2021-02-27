import React, { useState, useEffect } from "react";

function HookIntervalCount8() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}

export default HookIntervalCount8;
