import React from "react";
import Button from "../Button"
import "./style.css";


function Storyboard(props) {

  return (
    <div className="container">
      <div className="card">
      <h5 className="card-title">Your location: {props.name}</h5>
        <div className="card-body">
          <p className="card-text">Details: {props.story}</p>
        <div>
        </div>
        <Button 
          movement={props.movement}
        />
        </div>
      </div>
    </div>
  );
}

export default Storyboard;
