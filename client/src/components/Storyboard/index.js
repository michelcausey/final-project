import React from "react";
import Button from "../Button";
import Modal from "../Modal";
import "./style.css";

function Storyboard(props) {
  return (
    <div className="container">
      <div className="card">
      <div className="location-div">
      <div className="img-container">
          <img id="sized-image" src={props.image} alt="props" />
        </div>
        <p className="card-title">
          Selection: 
          <br></br>{props.name}
        </p>
        <Modal />
        </div>
        <div className="card-body">
          <p className="card-text">
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
