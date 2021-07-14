import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Landing = ({ aos_effect, title, after, description, home, to }) => {
    useEffect(() => {
        document.querySelector(".hamburger-menu").classList.remove("animate");
        document
            .querySelector(".nav__right")
            .classList.remove("hamburger__menu__active");
    }, []);
    useEffect(() => {
        if (!home) {
            window.scrollTo(0, 0);
        }
    }, []);
    return (
        <div className="landing" data-aos="zoom-up">
            <Helmet>
                <title>{`${title} ${" "} ${after}`}</title>
                <meta name="description" content={description} />
            </Helmet>

            <div className="landing__top" data-aos="fade-left">
                <h2>
                    {title} <span>{after}</span>{" "}
                </h2>
                <p>{description}</p>
            </div>
            <div className="landing__bottom" data-aos="fade-right">
                <a href={`${to}#request-a-call`}>
                    <button>Request for Free Consultation</button>
                </a>
            </div>
        </div>
    );
};

export default Landing;
