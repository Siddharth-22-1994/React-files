import React from "react";
import MenuBar from "./MenuBar";
import ParallexEffect from "./ParallexEffect";
import About from "./About";
import ParallexEffect2 from "./ParallexEffect2";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className={"hme-flex"}>
      <MenuBar></MenuBar>
      <ParallexEffect></ParallexEffect>
      <About></About>
      <ParallexEffect2></ParallexEffect2>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
