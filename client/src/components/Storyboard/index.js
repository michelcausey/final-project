import React from "react";
import Button from "../Button";
import "./style.css";

function Storyboard(props) {
  return (
    <div className="container">
      <div className="card">
      <div className="location-div">
        <p className="card-title">
          Your current location:
          <br />
          {props.name}
        </p>
        </div>
        <div className="img-container">
          <img src={props.image} alt="props" />
        </div>

        <div className="card-body">
          <p className="card-text">
            Location details:
            <br />
            {props.story}
          </p>
          <div />
          <div className="btn-container">
            <Button
              movement={props.movement}
              handleBtnClick={props.handleBtnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storyboard;
