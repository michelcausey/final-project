import React from "react";
import Button from "../Button";
import "./style.css";

function Storyboard(props) {
  return (
    <div className="container">
      <div className="card">
      <div className="location-div">
        <p className="card-title">
          Selection: {props.name}
        </p>
        </div>
        <div className="img-container">
          <img id="sized-image" src={props.image} alt="props" />
        </div>
        <div className="card-body">
          <p className="card-text">
             Details:
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
      <footer><a href="https://michelcausey.github.io/Bootstrap-Portfolio/" target="_blank" rel="noopener noreferrer">michel causey 2019</a></footer>
    </div>
  );
}

export default Storyboard;
