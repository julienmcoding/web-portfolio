import "./about.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="up">
          <h2 className="code-about head1">about</h2>
          <p className="p-about">
            React - Node.JS developer who cares deeply about user experience and
            improving his skills. I am eager to learn new things and work on
            awesome projects with amazing people! (We all are). My variety of
            professional experiences makes me a very versatile person capable of
            adapting very quickly and resisting changing contexts.
          </p>
          <h2 className="code-about head2">about</h2>
      </div>
      <div className="down">
        <div className="icons">
          <FontAwesomeIcon
            icon={faHtml5}
            className="icon"
            style={{ color: "#EF4723" }}
          />
          <FontAwesomeIcon
            icon={faCss3}
            className="icon"
            style={{ color: "#2159DA" }}
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            className="icon"
            style={{ color: "#F7D634" }}
          />
          <FontAwesomeIcon
            icon={faReact}
            className="icon"
            style={{ color: "#34D9F7" }}
          />
          <FontAwesomeIcon
            icon={faNode}
            className="icon"
            style={{ color: "#5D9F54" }}
          />
          <FontAwesomeIcon
            icon={faGitAlt}
            className="icon"
            style={{ color: "#D75C2E" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
