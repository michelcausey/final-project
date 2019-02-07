import React from "react";
import "./style.css";

function About() {
  return (
    <div>
    <div className="about-container">
      <div className="description-div">
        <h1>Code Your Own Adventure:</h1>
        <h1>The Final Project</h1>
        <hr></hr>
        <h3>
          Can you make it home in time to turn in your project?
        </h3>
        <br />
        <div className="about-image">
          <img id="about-img" src="images/about-image.jpg" alt="about" />
        </div>
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
