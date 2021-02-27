// Another method to consume context
import React, { useContext } from "react";
import HookCompContext14 from "./HookCompContext14";
import { Usercontext, Channelcontext } from "../App";

function HookCompContext13() {
  const user = useContext(Usercontext);
  const channel = useContext(Channelcontext);
  return (
    <div>
      <HookCompContext14></HookCompContext14>
      {user} - {channel}
    </div>
  );
}

export default HookCompContext13;
