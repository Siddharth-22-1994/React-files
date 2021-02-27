import React from "react";
import { FaHotel } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

function About() {
  return (
    <div>
      <div className={"about-div1"}>
        <p className={"Aboutwelcome"}>Welcome To</p>
        <hr style={{ width: "1050px", fontSize: "2px" }}></hr>
        <p
          style={{
            fontSize: "23px",
            fontWeight: "bold",
            marginLeft: "-900px",
            color: "rgb(13, 160, 197)",
          }}
        >
          About Company
        </p>

        <div>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Are constantly thriving to improve our already high standards to
            have you see us as the absolute best in the industry. It’s not
            enough to have trust in the cleaning.
          </p>
        </div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "-900px",
            color: "rgb(13, 160, 197)",
          }}
          className={"residentName"}
        >
          <span>
            <i class="fa fa-building" aria-hidden="true"></i>
          </span>
          <HiHome></HiHome>Residental
        </p>
        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
          Based on decades of knowledge, we know that cleaning helps to protect
          your asset. As the industry leader, we’re dedicated to deliver the
          most excellent carpet cleaning and floor cleaning service you can
          find. In fact, we possess a premier lineup of services that
          out-perform the competition, brought to you from highly trained
          specialist. Our qualified deep cleaning provides the care and
          maintenance essential to expand the life of your floors and
          furnishings. Not only do we save you time, but you can calm down,
          knowing that you live and work in a cleaner, better environment.{" "}
        </p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "-900px",
            color: "rgb(13, 160, 197)",
          }}
        >
          <FaHotel></FaHotel> Commercial
        </p>
        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
          To ensure that your office building is always a clean, healthy, and
          safe environment, trust the cleaning experts at Cleaning Masters. We
          provide commercial cleaning services of the highest standards .
        </p>
        <button
          style={{
            backgroundColor: "transparent",
            padding: "10px",
            marginLeft: "-960px",
            borderRadius: "20px",
            marginTop: "-10px",
            color: "rgb(13, 160, 197)",
            fontWeight: "bold",
          }}
        >
          Read More
        </button>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default About;
