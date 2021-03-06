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
            A future React Rock Start ! 
            I want to help the community, improve myself and do something that has a meaning.
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
