import React from "react";
import Button from "../Button";
import "./style.css";

function Storyboard(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="img-container">
          <img src={props.image} />
        </div>
        <h5 className="card-title">Your current location: {props.name}</h5>
        <div className="card-body">
          <p className="card-text">
            Location details:<br />
            {props.story}
          </p>
          <div />
          <div className="btn-container">
            <Button movement={props.movement} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storyboard;
