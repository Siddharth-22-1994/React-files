import React from "react";
import ReactDom from "react-dom";

function PortalsDemo() {
  return ReactDom.createPortal(
    <h2>Portals Demo</h2>,
    document.getElementById("portal-root")
  );
}

export default PortalsDemo;
