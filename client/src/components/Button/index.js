import React from "react";
import "./style.css";

const Button = (props)=> {

    console.log(props)

    return (
    <div className="movement">
        <button type="button" id="btn1" className="btn btn-secondary btn-lg btn-block">{props.movement.N}</button>
        <button type="button" id="btn2" className="btn btn-secondary btn-lg btn-block">{props.movement.E}</button>
        <button type="button" id="btn3" className="btn btn-secondary btn-lg btn-block">{props.movement.S}</button>
        <button type="button" id="btn4" className="btn btn-secondary btn-lg btn-block">{props.movement.W}</button>
    </div>
    
    )
}

export default Button;