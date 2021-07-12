import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>
                    &copy; {new Date().getFullYear()} &nbsp;KufAcademy.com |
                    contact@kufacademy.com
                </p>
            </div>
        </div>
    );
};

export default Footer;
