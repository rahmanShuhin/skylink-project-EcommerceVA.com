import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Landing = ({ aos_effect, title, after }) => {
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
                <p>
                    Through our Management Service, you will be able to create,
                    modify, and scale 100% of your E-Commerce business.
                </p>
            </div>
            <div className="landing__bottom" data-aos="fade-right">
                <Link to="/request-a-call/">
                    <button>Schedule a Free Consultation Call</button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;
