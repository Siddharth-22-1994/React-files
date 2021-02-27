// Helps to avoid re-rendering in functional comp when there is no change in state

import React from "react";

function MemoComp({ name }) {
  console.log("Memo Component");

  return <div>{name}</div>;
}

export default React.memo(MemoComp);
