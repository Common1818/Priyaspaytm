import React from "react";
import $ from "jquery";
import "./footerStyles/Footer.css";

const Footer = () => {
  $(document).ready(function () {
    var accordionOpen = $(".first_depth p"),
      secondDepth = $(".second_depth");

    accordionOpen.on("click", function () {
      accordionOpen.closest(".first_depth").removeClass("on");
      $(this).closest(".first_depth").addClass("on");
    });
  });
  return (
    <footer>
      <div className="wrap">
        <div className="upper_side contents">
          <ul className="flex">
            <li className="first_depth">
              <p className="title">SHOP Bikes</p>
              <ul className="second_depth">
                <li className="white">By Age Group</li>
                <li>
                  <a href="#">For Adults</a>
                </li>
                <li>
                  <a href="#">For Kids</a>
                </li>
                <li>
                  <a href="#">For Toddlers</a>
                </li>
              </ul>
              <ul className="second_depth">
                <li className="white">By Category</li>
                <li>
                  <a href="#">Mountain</a>
                </li>
                <li>
                  <a href="#">City</a>
                </li>
                <li>
                  <a href="#">Road</a>
                </li>
                <li>
                  <a href="#">Hybrid</a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </li>
            <li className="first_depth">
              <p className="title"> Accessories</p>
              <ul className="second_depth">
                <li>
                  <a href="#">For Rider</a>
                </li>
                <li>
                  <a href="#">For Bike</a>
                </li>
                <li>
                  <a href="#">Navigation</a>
                </li>
                <li>
                  <a href="#">Gear</a>
                </li>
              </ul>
            </li>
            <li className="first_depth">
              <p className="title">SUPPORT</p>
              <ul className="second_depth">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Store Locator</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
              </ul>
            </li>

            <li className="first_depth">
              <p className="title">CONTACT</p>
              <ul className="second_depth">
                <li>
                  <ul>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>

                    <li>
                      <em className="white">Address</em>
                      <p>address</p>
                    </li>
                    <li>
                      <em className="white">Hours</em>
                      <p>M - F 6:00am - 3:30pm PST </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mid_side contents">
          <ul className="flex">
            <li>
              <p className="title">STORE LOCATOR</p>
              <ul className="second_depth">
                <li>
                  <p>Find a Vans store near you</p>
                  <button className="store">FIND A STORE</button>
                </li>
                <li></li>
              </ul>
            </li>
            <li>
              <p className="title">FOLLOW BicycleDrift</p>
              <ul className="second_depth flex sns">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className="title">SUBSCRIBE</p>
              <ul className="second_depth">
                <li>
                  <p>Receive product news and updates in your inbox.</p>
                </li>
                <li>
                  <div className="input_box flex">
                    <input type="text" placeholder="Email Address"></input>
                    <button>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="lower_side contents">
          <ul className="flex">
            <li className="logo"></li>
            <li>&copy; BicycleDrift</li>
            <li>{/* <a href="#">Modern Slavery Statement</a> */}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
