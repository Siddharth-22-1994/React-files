import React from "react";

// function Greet() {
//   return <h1>Hello Sidhu!!</h1>;
// }

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroname}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//Step:1 Destructuring it without using props

const Greet = ({ name, heroname }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroname}
      </h1>
    </div>
  );
};
export default Greet;
