import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Horizontal from "../Horizontal/Horizontal";

const WatchVideo = ({ to }) => {
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
                            Here's A Video That Shows You How{" "}
                            <span>We Handle Things Quickly!</span>
                        </h2>
                        <div className="schedule__btn">
                            <a href={`${to}#request-a-call`}>
                                <button>Request for Free Consultation</button>
                            </a>
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
                            src="https://www.youtube.com/embed/ZBaSUTSoZY4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </Col>
                </Row>
            </div>
            <div data-aos="fade-up">
                <Horizontal></Horizontal>
            </div>
        </div>
    );
};

export default WatchVideo;
