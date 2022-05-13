import React from "react";
import "./portofolio.scss";

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      <h1>My Recent Work</h1>
      <div className="container">
        <div className="item">
          <img src="assets/inspirational-quote.png" alt="inspiration-quote" />
          <a
            href="https://inspiration-quote-react.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Inspiration Quote</h3>
          </a>
        </div>
        <div className="item">
          <img src="assets/todo-react.png" alt="todo on react" />
          <a
            href="https://react-todo-six-bice.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>To Do list on React</h3>
          </a>
        </div>
      </div>
      <h2>And much more to come...</h2>
      <a className="arrow-link" href="#contact">
        <img className="arrow" src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default Portofolio;
