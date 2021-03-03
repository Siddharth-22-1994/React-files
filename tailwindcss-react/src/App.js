import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route } from "react-router";
import Home from "./pages";
import { Switch } from "react-router-dom";
import About from "./pages/about";
import Menu from "./pages/menu";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("resizeeeddd");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/menu" component={Menu}></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;

// Tailwind react Setup: https://www.youtube.com/watch?v=gOQ31Kc8H5E
// Tailwind Docs: https://tailwindcss.com/docs/guides/create-react-app
// Heroicons: https://heroicons.dev/
