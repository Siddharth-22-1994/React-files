import React from "react";

function ErrorBoubdrHero(props) {
  if (props.heroname === "Villan") {
    throw new Error("Not a Hero");
  }

  return (
    <div>
      <h2>Hi, Iam {props.heroname}</h2>
    </div>
  );
}

export default ErrorBoubdrHero;
