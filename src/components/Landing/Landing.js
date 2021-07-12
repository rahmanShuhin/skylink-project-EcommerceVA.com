import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const Landing = ({ aos_effect, title, after, description }) => {
    useEffect(() => {
        document.querySelector(".hamburger-menu").classList.remove("animate");
        document
            .querySelector(".nav__right")
            .classList.remove("hamburger__menu__active");
    }, []);
    return (
        <div className="landing" data-aos="fade-up">
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Get a fully functional E-Commerce business created, modified, and scaled 100% for you."
                />
            </Helmet>
            <div className="landing__top" data-aos="fade-left">
                <h2>
                    {title} <span>{after}</span>{" "}
                </h2>
                <p>{description}</p>
            </div>
            <div className="landing__bottom" data-aos="fade-right">
                <Link to="/request-a-call/">
                    <button>Request for Free Consultation</button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;
