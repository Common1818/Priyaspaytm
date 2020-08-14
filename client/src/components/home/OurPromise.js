import React from "react";
import "./css/OurPromise.css";
import HomeDelivery from "./Images/HomeDelivery.PNG";
import SecureTransactions from "./Images/SecureTransactions.PNG";
import Asssembled from "./Images/Assembled.PNG";
import QualityCheck from "./Images/QualityCheck.PNG";
import { Row, Col } from "react-bootstrap";

const OurPromise = () => {
  return (
    <div class="our-promise-container">
      <h2>Our Promise</h2>
      <div className="our-promise">
        <Row className="promises desktop">
          <Col className="promise" sm={3}>
            <img src={HomeDelivery} alt="" />
          </Col>
          <Col className="promise" sm={3}>
            <img src={SecureTransactions} alt="" />
          </Col>
          <Col className="promise" sm={3}>
            <img src={Asssembled} alt="" />
          </Col>
          <Col className="promise" sm={3}>
            <img src={QualityCheck} alt="" />
          </Col>
        </Row>

        <Row className="promises mobile">
          <Row>
            <Col className="promise" xs={6}>
              <img src={SecureTransactions} alt="" />
            </Col>
            <Col className="promise" xs={6}>
              <img src={QualityCheck} alt="" />
            </Col>
          </Row>
          <Row>
            <Col className="promise" xs={6}>
              <img src={HomeDelivery} alt="" />
            </Col>
            <Col className="promise" xs={6}>
              <img src={Asssembled} alt="" />
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default OurPromise;
