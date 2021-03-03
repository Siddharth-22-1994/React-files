import React from "react";
import ImageOne from "../images/lettuce-egg-salad-1-1-799x1024.jpg";
import ImageTow from "../images/summer_egg_salad-9053529.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg1" className="h-full rounded mb-5 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2"> Egg Salad</h2>
          <p className="mb-2">Delicious, Healthy and Nutricious</p>
          <span>$20</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTow} alt="egg1" className="h-full rounded mb-5 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2"> Egg Summer</h2>
          <p className="mb-2">Delicious, Tasty and Crispy</p>
          <span>$27</span>
        </div>
      </div>
    </>
  );
};

export default Content;
