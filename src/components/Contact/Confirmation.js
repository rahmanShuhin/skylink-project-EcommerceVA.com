import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Confirmation = () => {
    return (
        <div className="confirmation">
            <Helmet>
                <title>Contact | Kuf Academy</title>
                <meta
                    name="description"
                    content="Get a fully functional E-Commerce business created, modified, and scaled 100% for you."
                />
            </Helmet>
            <div>
                <p>Thank You!</p>
                <p>
                    We have received your consultation request and look forward
                    to talking with you soon.
                </p>
            </div>
        </div>
    );
};

export default Confirmation;
