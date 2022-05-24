import React from "react";
import "./portofolio.scss";

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      <h1>My Recent Work</h1>
      <div className="container-portfolio">
        <div className="item">
          <img src="assets/travel-app.png" alt="travel-app" />
          <a
            href="https://travel-companion-six.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Travel Companion</h3>
          </a>
        </div>
        <div className="item">
          <img src="assets/calculator.png" alt="calculator" />
          <a
            href="https://calculator-fumk86nai-julienmcoding.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Calculator-App</h3>
          </a>
        </div>
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
    </div>
  );
};

export default Portofolio;
