import React from "react";
import "./style.css";

function Storyboard(props) {
  console.log(props)

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.id}</h5>
          <p className="card-text">
            {props.text}
          </p>
          <button className="btn btn-primary" id="one">
            {props.options[0]}
          </button>
          <button className="btn btn-primary" id="two">
            {props.options[1]}
          </button>
        </div>
        <img src="https://placehold.it/200x200" className="card-img-top" alt="story" />
      </div>
    </div>
  );
}

export default Storyboard;
