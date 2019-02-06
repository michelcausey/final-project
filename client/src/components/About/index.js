import React from "react";
import "./style.css";

function About() {
  return (
    <div>
    <div className="about-container">
      <div className="description-div">
        <h1>The Title Of This CYOA Game is Really Exciting</h1>
        <h3>
          The description of this game will most definitely make you want to
          play it, once I write it!
        </h3>
        <br />
        <div className="about-image">
          <img id="about-img" src="https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_960_720.jpg" alt="about" />
        </div>
        <p>
          more details more details, i know what the game is, more details more
          details <br />
          yes, i have story in mind, more details more details. what will the
          outcome be?
        </p>
      </div>
      <div className="how-to-play-div">
        <h2 id="play">
          Want to Play?{" "}
          <a id="login-link" href="/login">
            {" "}
            Log-in to your existing account
          </a>
        </h2>
        <h4 id="register">
          Don't have an account?{" "}
          <a href="/register" id="signup-link">
            Sign up now
          </a>
        </h4>
      </div>
    </div>
    <footer><a href="https://michelcausey.github.io/Bootstrap-Portfolio/" target="_blank" rel="noopener noreferrer">michel causey 2019</a></footer>
    </div>
  );
}

export default About;
