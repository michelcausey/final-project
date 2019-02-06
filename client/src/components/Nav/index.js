import React from "react";
import "./style.css";

function Nav() {
  return (
<nav className="navbar navbar-expand-lg">
<a href="/"><h5 id="cyoa">Code Your Own Adventure</h5></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/login">Log-In <span className="sr-only">(current)</span></a>
    </li>
    {/* <li className="nav-item active">
      <a className="nav-link" href="/game">Play<span className="sr-only">(current)</span></a>
    </li> */}
  </ul>
</div>
</nav>
  );
}

export default Nav;



