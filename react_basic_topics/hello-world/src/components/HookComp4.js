import React, { useState } from "react";

function HookComp4() {
  const [items, setItem] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
    console.log(items.id);
  };

  return (
    <div>
      <button onClick={addItem}>Click to Add Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookComp4;
