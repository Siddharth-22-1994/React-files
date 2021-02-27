import React, { useState, useEffect } from "react";

function HookMouse6() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect Called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component Unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <h3>
        Hook X -{x} Y- {y}
      </h3>
    </div>
  );
}

export default HookMouse6;
