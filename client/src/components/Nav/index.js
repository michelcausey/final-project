import React from "react";
import "./style.css";

function Nav() {
  return (
<nav class="navbar navbar-expand-lg">
<a href="/about"><h5>Choose Your Own Adventure</h5></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/about">About <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/login">Log-In <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/game">Play<span class="sr-only">(current)</span></a>
    </li>
  </ul>
</div>
</nav>
  );
}

export default Nav;



