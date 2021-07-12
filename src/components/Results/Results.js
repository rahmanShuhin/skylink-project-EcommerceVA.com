import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../../../src/images/Arrows---Copy_orrange.png";
import results from "../../../src/images/1.png";
import results2 from "../../../src/images/2.png";
import results3 from "../../../src/images/3.png";
import results4 from "../../../src/images/4.png";
import results5 from "../../../src/images/5.png";
import results6 from "../../../src/images/6.png";
import Horizontal from "../Horizontal/Horizontal";

const Results = () => {
  return (
    <div className="results">
      <div className="__results__top" data-aos="fade-up">
        <h2>Client Results</h2>
      </div>
      <div className="__results__img" data-aos="fade-up">
        <img src={arrow} alt="" />
      </div>
      <div className="__results__bottom__img">
        <Container>
          <div className="main__img" data-aos="fade-up">
            <Row>
              <Col md={6}>
                <img
                  src={results}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-right"
                />
              </Col>
              <Col md={6}>
                <img
                  src={results2}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-left"
                />
              </Col>
            </Row>
          </div>
          <div className="__section__one__img">
            <Row>
              <Col md={6}>
                <img
                  src={results3}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-right"
                />
              </Col>
              <Col md={6}>
                <img
                  src={results4}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-left"
                />
              </Col>
            </Row>
          </div>
          <div className="__section__two__img">
            <Row>
              <Col md={6}>
                <img
                  src={results5}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-right"
                />
              </Col>
              <Col md={6}>
                <img
                  src={results6}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-left"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div data-aos="fade-up">
        <Horizontal></Horizontal>
      </div>
    </div>
  );
};

export default Results;
