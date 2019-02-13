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
        <h3>Can you make it home in time to turn in your project?</h3>
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
    <footer>
      <a href="https://michelcausey.github.io/Bootstrap-Portfolio/" target="_blank" rel="noopener noreferrer">michel causey 2019</a>
      <div id="icon-credit">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </footer>
    </div>
  );
}

export default About;
