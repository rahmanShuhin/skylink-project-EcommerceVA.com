import React from "react";
import { Col, Row } from "react-bootstrap";
import img1 from "../../images/Beltok.webp";
import img2 from "../../images/Ted & Brooks.webp";
import img3 from "../../images/Group 21.webp";
const data = [img1, img2, img3];
const Trusted = () => {
  return (
    <div className="trusted">
      <div>
        <h2>
          Trusted by Companies and Entrepreneurs Throughout the World
        </h2>
      </div>
      <div>
        <Row>
          {data.map((x) => (
            <Col lg={4} className="img__box">
              <img src={x} alt="" />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Trusted;
