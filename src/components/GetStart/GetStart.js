import React from "react";
import { Link } from "react-router-dom";

const GetStart = () => {
    return (
        <div className="getStart" data-aos="fade-up">
            <div className="__getStart__top" data-aos="fade-left">
                <h2>Ready to Get Started???</h2>
                <p>
                    Our team is ready to talk to you! Free consultations are
                    offered to introduce our service. Then you can decide if our
                    service is right for you. Any questions you may have about
                    passive investing can be answered by our founders. Only
                    serious inquiries.
                </p>
            </div>
            <div className="schedule__btn" data-aos="fade-right">
                <a href="/#request-a-call">
                    <button>Request for Free Consultation</button>
                </a>
            </div>
        </div>
    );
};

export default GetStart;
