import React from "react";
import "./myStyles.css";

function Stylesheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={`${className} font-xl`}>StyleSheets</h2>
    </div>
  );
}

export default Stylesheets;
