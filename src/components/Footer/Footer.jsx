import React from "react";

import "./Footer.css";

import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitHub} alt="logo github" />
          <img src={Instagram} alt="logo instagram" />
          <img src={Linkedin} alt="logo linkedin" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo fitclub" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};
