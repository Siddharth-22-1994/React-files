import React, { useState } from "react";
import HookMouse6 from "./HookMouse6";

function HookCleapUpComp7() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle ClanUp</button>
      {display && <HookMouse6></HookMouse6>}
    </div>
  );
}

export default HookCleapUpComp7;
