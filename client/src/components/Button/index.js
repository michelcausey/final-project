import React from "react";
import "./style.css";

const Button = (props)=> {

    console.log(props)

    function handleBtnClick(event) {
        event.preventDefault();
        console.log("clicked")
      }

    return (
    <div className="movement">
        <button onClick={handleBtnClick} type="button" id="btn1" className="btn btn-secondary btn-lg btn-block">{props.movement.N}</button>
        <button onClick={handleBtnClick} type="button" id="btn2" className="btn btn-secondary btn-lg btn-block">{props.movement.E}</button>
        <button onClick={handleBtnClick} type="button" id="btn3" className="btn btn-secondary btn-lg btn-block">{props.movement.S}</button>
        <button onClick={handleBtnClick} type="button" id="btn4" className="btn btn-secondary btn-lg btn-block">{props.movement.W}</button>
    </div>
    
    )
}

export default Button;