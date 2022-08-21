import React from "react";
import CTA from "./CTA";
import NEWPIC from "../../assets/images/NEWPIC.jpeg";
import HeaderSocial from "./HeaderSocial";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          Patrick Awuku <span>Adjei</span>
        </h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={NEWPIC} alt="this is a picture of myself" />
        </div>
        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
