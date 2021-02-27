import React from "react";
import { Usercontext, Channelcontext } from "../App";

function HookCompContext14() {
  return (
    <div>
      <Usercontext.Consumer>
        {(user) => {
          return (
            <Channelcontext>
              {(channel) => {
                return (
                  <div>
                    {channel} context, User Context is {user}
                  </div>
                );
              }}
            </Channelcontext>
          );
        }}
      </Usercontext.Consumer>
    </div>
  );
}

export default HookCompContext14;
