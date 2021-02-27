import React from "react";
import Columns from "./Tables";
// The main advantage of React.Fragment is that we can use 'Key' attribute

function Tables() {
  return (
    <table>
      <thead>
        <th>
          <Columns></Columns>
        </th>
      </thead>
    </table>
  );
}

export default Tables;
