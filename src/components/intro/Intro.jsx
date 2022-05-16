import React from "react";
import "./intro.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      <div className="left">
        <div className="button-resume">
          <a href="assets/Manois_JulienCV.pdf" download="Manois Julien CV.pdf">
            <button className="btn btn-primary btn-lg">Get my resume</button>
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/julien-manois/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/julienmcoding"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Julien Manois,</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Wecolme on my portfolio :)",
                    "a React Developer",
                    "a hard working person",
                    "a Node.JS Developer",
                    "eager to learn!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
