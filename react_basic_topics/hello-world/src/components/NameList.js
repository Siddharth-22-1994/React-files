// ------- To use List and Objects -------

import React from "react";
// import NameList2 from "./NameList2";

// 1. To display array-list of names

function NameList() {
  const names = ["name1", "name2", "name3"];
  // Key is used to identify each element uniquely
  const ans = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return (
    //   Method:1
    // <div>
    //   <h2>{names}</h2>
    // </div>

    // Method:2
    // <div>
    //   {names.map((name) => (
    //     <h2>{name}</h2>
    //   ))}
    // </div>

    //   Method:3
    <div>
      <h2>{ans}</h2>
    </div>
  );
}

// 2. To display array-objects
// function NameList() {
//   const person = [
//     {
//       id: 1,
//       name: "Name1",
//       age: 27,
//       skill: "React",
//     },
//     {
//       id: 2,
//       name: "Name2",
//       age: 28,
//       skill: "Python",
//     },
//   ];

//   //Key property should be used while creating list of elements.
//   //Key helps to identify elements individually and also helps to find which element is chanaged and which is unchanged

//   const ans = person.map((eachperson) => (
//     <NameList2 key={eachperson.id} property={eachperson}></NameList2>
//   ));
//   return <div>{ans}</div>;
// }

export default NameList;
