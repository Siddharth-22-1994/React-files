import React from "react";
import "./Mysetyles.css";
// import YouTubePlayer from “react-player/lib/players/YouTube”;

function ParallexEffect() {
  return (
    <div>
      <div className={"img"}>
        {/* <iframe
          width="966"
          height="543"
          src="https://www.youtube.com/embed/pZyJbXlh0Xc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <p className={"big-img-text"}>
          {" "}
          Spring Cleaning? <br></br>
          <span style={{ paddingLeft: "80px" }}>Don't Panic!</span> <br></br>
        </p>
        <h5
          style={{
            fontSize: "17px",
            marginLeft: "-450px",
            marginTop: "-20px",
            textAlign: "left",
            fontFamily: "Luminari",
          }}
        >
          In Clany we use a wide variety of cleaning methods, <br></br>
          chemicals, and equipment to facilitate and expedite <br></br>the
          cleaning process.<br></br>
          <div className={"bigPicButtons"}>
            <button>
              <a
                href="#"
                style={{ textDecoration: "none", color: "rgb(13, 160, 197)" }}
              >
                Login{" "}
              </a>
            </button>

            <button
              style={{
                marginLeft: "20px",
              }}
            >
              <a
                href="#"
                style={{ textDecoration: "none", color: "rgb(13, 160, 197)" }}
              >
                SignUp
              </a>
            </button>
          </div>
        </h5>
      </div>
    </div>
  );
}

export default ParallexEffect;
