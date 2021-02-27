import React from "react";

function NameList2({ property }) {
  return (
    <div>
      <h2>
        {property.name}, {property.age}, {property.skill}
      </h2>
    </div>
  );
}

export default NameList2;
