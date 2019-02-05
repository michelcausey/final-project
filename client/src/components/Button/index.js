import React from "react";
import "./style.css";

const Button = (props)=> {

    return (
    <div className="movement">
        <button onClick={props.handleBtnClick} type="button" id="btn1" value="N" className="btn btn-secondary btn-lg btn-block">{props.movement.N}</button>
        <button onClick={props.handleBtnClick} type="button" id="btn2" value="E" className="btn btn-secondary btn-lg btn-block">{props.movement.E}</button>
    </div>
    )
}

export default Button;