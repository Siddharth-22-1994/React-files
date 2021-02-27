import React from "react";
import { FaUsers } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { GiVacuumCleaner } from "react-icons/gi";

function ParallexEffect2() {
  return (
    <div>
      <div className={"parllex2Img"}>
        <div className={"textInparlex2"}>
          <div className={"customerIcon"}>
            <section>
              <div>
                <p style={{ marginTop: "100px" }}>1,500</p>
                <p>
                  <FaUsers style={{ marginTop: "-50px" }}></FaUsers>
                </p>
                <p style={{ marginTop: "-50px" }}>Happy Customers</p>
              </div>
            </section>
            <section>
              <p style={{ marginLeft: "600px", marginTop: "-150px" }}>100%</p>
              <p>
                <GiStabbedNote
                  style={{
                    marginTop: "-200px",
                    marginLeft: "-280px",
                  }}
                ></GiStabbedNote>
              </p>
              <p style={{ marginTop: "-60px", marginLeft: "-280px" }}>
                Service Guarenty
              </p>
            </section>
            <section>
              <p style={{ marginLeft: "900px", marginTop: "-220px" }}>30+</p>
              <p>
                <BsPeopleFill
                  style={{ marginTop: "-330px", marginLeft: "-280px" }}
                ></BsPeopleFill>
              </p>
              <p style={{ marginTop: "-127px", marginLeft: "-200px" }}>
                Cleaners
              </p>
            </section>
            <section>
              <p style={{ marginLeft: "1135px", marginTop: "-290px" }}>1000+</p>
              <p>
                <GiVacuumCleaner
                  style={{ marginTop: "-450px", marginLeft: "-280px" }}
                ></GiVacuumCleaner>
              </p>
              <p style={{ marginTop: "-190px", marginLeft: "-260px" }}>
                Cleans Completed
              </p>
            </section>
          </div>
        </div>
      </div>
      <br></br>
      <hr style={{ width: "1100px", height: "100px", color: "black" }}></hr>
    </div>
  );
}

export default ParallexEffect2;
