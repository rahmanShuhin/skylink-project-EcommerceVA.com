import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import arrow from "../../../src/images/Arrows---Copy_orrange.png";

const Services = () => {
    const data = [
        {
            id: 1,
            head: "Amazon Store Management",
            aos: "fade-right",
            icon: <i className="fas fa-list fa-3x"></i>,
            text: "The purpose of an Amazon automation business is to earn passive income without lifting a finger. This is what our team does for clients while targeting a 15%-35% profit margin. Amazon Automation client stores hold a market value of over $1 million after 18 months of operating with us on average.",
        },
        {
            id: 2,
            head: "Full Support",
            aos: "fade-left",
            icon: <i className="fas fa-money-check-alt fa-3x"></i>,
            text: "Our Customer Support & Administrative Assistants can help you effectively handle customer inquiries, manage orders, and keep your business organized. Our staff is dedicated to providing the best customer service and experience.",
        },
    ];

    return (
        <div className="service" id="service">
            <div className="__service__top" data-aos="fade-up">
                <h2>What Can We Do For You? </h2>
                <p>
                    EcommerceVA intends to provide end-to-end support to Amazon
                    stores.
                </p>
            </div>
            <div className="__service__img" data-aos="fade-up">
                <img src={arrow} alt="" />
            </div>
            <div className="__service__card">
                <Row>
                    {data.map((service) => (
                        <Col lg={6} key={service.id}>
                            <Card
                                className="__service__card__body"
                                data-aos={service.aos}
                            >
                                <div className="__card_icon">
                                    {service.icon}
                                </div>
                                <Card.Body>
                                    <Card.Title>{service.head}</Card.Title>
                                    <Card.Text>{service.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Services;
