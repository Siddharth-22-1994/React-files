import React from "react";
import "./Mysetyles.css";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div className={"menu1"}>
      <p className={"clean-master"}>
        <span>
          <img
            src="https://as1.ftcdn.net/jpg/02/41/78/54/500_F_241785438_OUAP6J4fbopD0tJG8Z6rZEwRfL4BThNh.jpg"
            alt="logo"
            className={"logo"}
          />
        </span>
        <br></br>
        Cleaning Master
      </p>
      <div className={"buttns"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
            <ul>
              <Link to="/mission">
                <li>Mission</li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </Link>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pricing</a>
            <ul>
              <li>
                <a href="#">Installation and Setup</a>
              </li>
              <li>
                <a href="#">Online Store Integration</a>
              </li>
              <li>
                <a href="#">Dry Clean</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Contact</a>
            <ul>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Directions</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <p className={"moto"}>We Provide You Healthier and Cleaner Home</p>
      </div>
    </div>
  );
}

export default MenuBar;
