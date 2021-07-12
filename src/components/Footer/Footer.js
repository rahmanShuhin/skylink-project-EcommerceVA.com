import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>
                    &copy; {new Date().getFullYear()} &nbsp;EcommerceVA.com |
                    Tel: +12108074135 | info@ecommerceva.com
                </p>
            </div>
        </div>
    );
};

export default Footer;
