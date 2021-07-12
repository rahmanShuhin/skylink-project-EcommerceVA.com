import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import arrow from "../../../src/images/Arrows---Copy_orrange.png";

const Services = () => {
  const data = [
    {
      id: 1,
      head: "Onboarding",
      aos: 'fade-right' ,
      icon: <i className="fas fa-list fa-3x"></i>,
      text: "No matter if it is a brand new store or an aged store transferred to our management team, we make sure your Walmart store is set up and ready for automation. Our onboarding checklist will remind you what you need to do and how to apply for a Walmart seller account. We take over as soon as you're approved!"
    },
    {
      id: 2,
      head: "Full-Time Management",
      aos: 'fade-down' ,
      icon: <i className="fas fa-users-cog fa-3x"></i>,
      text: "We monitor and scale your Walmart store using the expertise of our partners and teams. Managing inventory, sales, customer service, and your store completely is our job. The Automation clients we have generate revenue in the 6-7 figure range. We can scale Walmart stores quickly since Walmart has minimal restrictions.",
    },
    {
      id: 3,
      head: "Generate Revenue",
      aos: 'fade-left' ,
      icon: <i className="fas fa-money-check-alt fa-3x"></i>,
      text: "Walmart Automation businesses are designed to earn passive income without any active work. We aim to generate a profit margin of 15%-35% for clients when doing this. The majority of Walmart Automation's clients make their first thousand dollars within two weeks of opening!",
    },
  ];

  return (
    <div className="service" id="service">
      <div className="__service__top" data-aos='fade-up'>
        <h2>Our Services</h2>
        <p>What do we do for our clients?</p>
      </div>
      <div className="__service__img" data-aos='fade-up'>
        <img src={arrow} alt="" />
      </div>
      <div className="__service__card">
        <Row>
          {data.map((service) => (
            <Col lg={4} key={service.id}>
              <Card className="__service__card__body" data-aos={service.aos}>
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
