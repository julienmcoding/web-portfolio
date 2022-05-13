import React from "react";
import "./portofolio.scss";

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      <h1>Projects</h1>
      <div className="container">
        <div className="item">
          <a
            href="https://inspiration-quote-react.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
          <img src="assets/inspirational-quote.png" alt="inspiration-quote" />
          
            <h3>Inspiration Quote</h3>
          </a>
        </div>
        <div className="item">
          <img src="assets/mobile.png" alt="inspiration-quote" />
          <h3>Inspiration Quote</h3>
        </div>
        <div className="item">
          <img src="assets/mobile.png" alt="inspiration-quote" />
          <h3>Inspiration Quote</h3>
        </div>
        <div className="item">
          <img src="assets/mobile.png" alt="inspiration-quote" />
          <h3>Inspiration Quote</h3>
        </div>
        <div className="item">
          <img src="assets/mobile.png" alt="inspiration-quote" />
          <h3>Inspiration Quote</h3>
        </div>
      </div>
      <a className="arrow-link" href="#contact">
        <img className="arrow" src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default Portofolio;
