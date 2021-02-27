import React, { useState } from "react";

function HookCompon3() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <br />
        <br />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <br />
        <br />
        Your Firstname is :{name.firstname}
        yourlastname is :{name.lastname}
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
  s;
}

export default HookCompon3;
