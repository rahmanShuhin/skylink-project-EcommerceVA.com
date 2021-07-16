import React, { useRef } from "react";
import logo from "../../images/Transparent Logo.svg";
import { Link } from "react-router-dom";
const Nav = ({ to }) => {
    const hamburgerRef = useRef();
    const navLinkRef = useRef();
    const handleBurger = () => {
        hamburgerRef.current.classList.toggle("animate");
        navLinkRef.current.classList.toggle("hamburger__menu__active");
    };
    return (
        <div className="nav__container">
            <div className="nav">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="nav__right" ref={navLinkRef}>
                    <Link to="/walmart/">Walmart</Link>
                    <Link to="/amazon/">Amazon</Link>
                    <Link to="/fb-dropshipping/">FB Dropshipping</Link>
                    <a href={`${to}#request-a-call`}>Contact</a>
                </div>
                {/* mobile hamburger menu */}
                <div className="menu-wrapper" onClick={handleBurger}>
                    <div ref={hamburgerRef} className="hamburger-menu"></div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
