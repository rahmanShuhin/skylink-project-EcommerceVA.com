import React, { useState } from "react";
import Confirmation from "./Confirmation";
import Footer from "../Footer/Footer";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { SMTPClient } from "smtp-client";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [sub, setSub] = useState(false);
  const [sent, setSent] = useState(false);
  const [value, setValue] = useState(false);
  const [subject, setSubject] = useState(false);

  const handleSubmit = (e) => {
    setSub(true);
    if (email && name && subject) {
      setSent(true);
      setSent(true);
      emailjs
        .sendForm(
          "service_m8ejfgz",
          "template_f2cwh0y",
          e.target,
          "user_zlryVR0rIO2Baeu5WhzsY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    e.preventDefault();
  };

  const handleEmail = (e) => {
    if (e) {
      if (validateEmail(e)) {
        setEmail(true);
      } else {
        setEmail(false);
      }
    }
  };

  const handleName = (e) => {
    if (e) {
      setName(true);
    } else {
      setName(false);
    }
  };

  const handleSubject = (e) => {
    if (e) {
      setSubject(true);
    } else {
      setSubject(false);
    }
  };
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <>
      {sent ? (
        <>
          <Confirmation></Confirmation>
        </>
      ) : (
        <div className="contact" data-aos="fade-up" id="request-a-call">
          {/* <Helmet>
                        <title>Contact | Kuf Academy</title>
                        <meta
                            name="description"
                            content="Get a fully functional E-Commerce business created, modified, and scaled 100% for you."
                        />
                    </Helmet> */}
          <div className="contact__body">
            <Row>
              <Col md={6} className="d-flex">
                <div className="contact__form__top align-self-center">
                  <p>
                    Let's Take Your Business to the Next Level
                  </p>
                  <p>
                    Message us on Facebook or, email us at
                    <b> info@ecommerceva.com</b> or, just fill
                    up the form below.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <form className="contact__form" onSubmit={handleSubmit}>


                  <div>
                    <label htmlFor="">*Full Name:</label>
                    <input
                      type="text"
                      placeholder="Your Full Name Here..."
                      name="name"
                      onChange={(e) => handleName(e.target.value)}
                      className={
                        (!name && sub && "error") ||
                        (name && sub && "success")
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="">*Email Address:</label>
                    <input
                      type="text"
                      placeholder="Your Email Address Here..."
                      name="email"
                      onChange={(e) =>
                        handleEmail(e.target.value)
                      }
                      className={
                        (!email && sub && "error") ||
                        (email && sub && "success")
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="">*Subject:</label>
                    <input
                      type="text"
                      placeholder="Email Subject Here..."
                      name="subject"
                      onChange={(e) =>
                        handleSubject(e.target.value)
                      }
                      className={
                        (!subject && sub && "error") ||
                        (subject && sub && "success")
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="">Message (Optional):</label>
                    <textarea
                      cols="30"
                      rows="5"
                      name="message"
                      placeholder="Type Your Message Here..."
                      className={sub && "success"}
                    ></textarea>
                  </div>
                  <button type="submit">
                    Request for Free Consultation
                  </button>
                </form>
              </Col>
            </Row>

          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
