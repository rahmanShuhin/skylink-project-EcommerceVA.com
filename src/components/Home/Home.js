import React from "react";
import Landing from "../Landing/Landing";
import { Card, Col, Row, Button } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import Horizontal from "../Horizontal/Horizontal";
import Trusted from "../Trusted/Trusted";
import WatchVideo from "../WatchVideo/WatchVideo";

const Home = () => {
    const data = [
        {
            id: 1,
            head: "Walmart Store Management",
            aos: "fade-right",
            icon: <i className="fas fa-list fa-3x"></i>,
            text: "Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business.",
            btnRoute: "walmart/",
        },
        {
            id: 2,
            head: "Amazon Store Management",
            aos: "fade-down",
            icon: <i className="fas fa-users-cog fa-3x"></i>,
            text: "Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business.",
            btnRoute: "amazon/",
        },
        {
            id: 3,
            head: "FB Dropshipping Store Management ",
            aos: "fade-left",
            icon: <i className="fas fa-money-check-alt fa-3x"></i>,
            text: "Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business.",
            btnRoute: "fb-dropship/",
        },
    ];
    return (
        <div className="home">
            <Landing
                title={"Get Fully Automated"}
                after={"E-commerce Store"}
                description={
                    "Your E-Commerce business can be created, modified, and scaled fully through our Management Service."
                }
                home={true}
                to={"/"}
            />
            <Trusted />
            <WatchVideo></WatchVideo>
            <div className="home__content">
                <h2 data-aos="fade-up">Online Store Management Services</h2>
                <div className="home__card">
                    <Row>
                        {data.map((service) => (
                            <Col lg={4} key={service.id}>
                                <Card
                                    className="home__card__body"
                                    data-aos={service.aos}
                                >
                                    <div className="home__card_icon">
                                        {service.icon}
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{service.head}</Card.Title>
                                        <Card.Text>{service.text}</Card.Text>
                                    </Card.Body>
                                    <Link to={`/${service.btnRoute}`}>
                                        <button>Learn More</button>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <Horizontal />

            <Contact />
        </div>
    );
};

export default Home;
