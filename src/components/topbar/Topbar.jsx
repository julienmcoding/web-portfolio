import React from "react";
import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessRook } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <FontAwesomeIcon icon={faChessRook} className="icon" />
          </a>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faMobile} className="icon" />
            <span>+33 6 87 99 11 78</span>
          </div>
          <div className="itemContainer">
            <a href="mailto:manois.julien@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>manois.julien@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
