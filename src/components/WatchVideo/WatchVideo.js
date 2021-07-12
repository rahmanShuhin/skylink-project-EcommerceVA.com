import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Horizontal from "../Horizontal/Horizontal";

const WatchVideo = () => {
    return (
        <div data-aos="fade-up">
            <Horizontal />
            <div className="watch__container">
                <Row>
                    <Col
                        md={6}
                        className="align-self-center"
                        data-aos="fade-right"
                    >
                        <h2>
                            Check Out The Video To See{" "}
                            <span>How We Get Things Done - Fast!</span>{" "}
                        </h2>
                        <div className="schedule__btn">
                            <Link to="/request-a-call/">
                                <button>Request for Free Consultation</button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        {/* <iframe
                            width="100%"
                            height="400"
                            src="https://youtu.be/P4YbSDIPiWc"
                        ></iframe> */}
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/P4YbSDIPiWc"
                            title="Kuf Academy - Automated E-commerce store"
                            frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default WatchVideo;
