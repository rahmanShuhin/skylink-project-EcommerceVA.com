import React from "react";
import logo from "../../images/Transparent Logo.svg";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link to="/walmart/">Walmart</Link>
                <Link to="/amazon/">Amazon</Link>
                <Link to="/fb-dropship/">FB Dropship</Link>
                <Link to="/request-a-call/">Contact</Link>
            </div>
        </div>
    );
};

export default Nav;
