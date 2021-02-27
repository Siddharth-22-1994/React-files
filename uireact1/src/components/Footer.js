import React, { useEffect } from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdPhonelinkRing } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import $ from "jquery";

function Footer() {
  useEffect(() => {
    $("#effect").on("scroll", function () {
      $(".rowFooter").hide(500);
      // alert("Test message");
    });
  }, []);

  return (
    <div>
      {/* <button id={"effect"}>Click me</button> */}
      <div className={"rowFooter"} style={{ marginTop: "-50px" }}>
        <section>
          <div className={"contacts"} style={{ marginLeft: "-1100px" }}>
            <h5 style={{ color: "rgb(13, 160, 197)" }}>Contact us</h5>
            <p>
              <span>
                <GrMapLocation></GrMapLocation>
              </span>{" "}
              Gud Morning Street,<br></br> Coimbatore 642001 | India
            </p>
            {/* ------------------ */}
            <p>
              <span>
                <MdPhonelinkRing></MdPhonelinkRing>
              </span>
              +91 87867-8998<br></br>+91 76789-80099
            </p>

            <p>
              <span>
                <HiOutlineMailOpen></HiOutlineMailOpen>
              </span>
              admin@cleanmaster.com<br></br>
              support@cleanmast.in
            </p>
          </div>
        </section>
        {/* ----------------------- */}
        <section>
          <div className={"myaccount"}>
            <p>
              <h5 style={{ color: "rgb(13, 160, 197)" }}>My Account</h5>
              <span>
                <a href="#">Our History</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Offers</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Specials</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Site Map</a>
              </span>
            </p>
          </div>
        </section>
        {/* -------------------------- */}
        <section>
          <div className={"OurServices"}>
            <p>
              <h5 style={{ color: "rgb(13, 160, 197)" }}>Our Services</h5>
              <span>
                <a href="#">About Us</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Customer Service</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Help</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Terms&Conditions</a>
              </span>
            </p>
          </div>
        </section>
        {/* ----------------------- */}
        <section>
          <div className={"Oursupport"}>
            <p>
              <h5 style={{ color: "rgb(13, 160, 197)" }}>Our Support</h5>
              <span>
                <a href="#">Site Map</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Privacy Policy</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">Advanced Search</a>
              </span>
              <br />
              <br />
              <span>
                <a href="#">FAQ</a>
              </span>
              <br />
            </p>
          </div>
        </section>
        {/* --------------------------- */}
        <section>
          <div className={"SocialMedia"}>
            <p>
              <h5 style={{ color: "rgb(13, 160, 197)" }}>Social Media</h5>
              <button
                style={{
                  padding: "10px",
                  borderRadius: "100px",
                  backgroundColor: "#4267B2",
                  color: "white",
                  border: "none",
                }}
              >
                <a href>
                  <FiFacebook style={{ fontSize: "25px" }}></FiFacebook>
                </a>
              </button>
              <button
                style={{
                  padding: "10px",
                  borderRadius: "100px",
                  marginLeft: "10px",
                  backgroundColor: "#1DA1F2",
                  color: "white",
                  border: "none",
                }}
              >
                <a href>
                  <FiTwitter style={{ fontSize: "24px" }}></FiTwitter>
                </a>
              </button>
              <button
                style={{
                  padding: "10px",
                  borderRadius: "100px",
                  marginLeft: "10px",
                  backgroundColor: "#DB4437",
                  color: "white",
                  border: "none",
                }}
              >
                <a href>
                  <AiOutlineGooglePlus
                    style={{ fontSize: "26px" }}
                  ></AiOutlineGooglePlus>
                </a>
              </button>
            </p>
          </div>
          {/* ------------------------ */}
          <div>
            <h5
              className={"paymentmethods"}
              style={{ color: "rgb(13, 160, 197)" }}
            >
              Payment Methods
            </h5>
            <br></br>
            <p
              style={{
                marginLeft: "1050px",
                marginTop: "-30px",
                fontSize: "36px",
                color: "blue",
              }}
            >
              <a href>
                <RiVisaFill></RiVisaFill>
              </a>
              <a href>
                <FaCcPaypal style={{ marginLeft: "10px" }}></FaCcPaypal>
              </a>
              <a href>
                <FaCcMastercard style={{ marginLeft: "10px" }}></FaCcMastercard>
              </a>
              <a href>
                <FaCcDiscover style={{ marginLeft: "10px" }}></FaCcDiscover>
              </a>
              <a href>
                <MdPayment style={{ marginLeft: "10px" }}></MdPayment>
              </a>
            </p>
          </div>
        </section>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Footer;
