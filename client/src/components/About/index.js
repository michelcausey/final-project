import React from "react";
import Footer from "../Footer";
import "./style.css";

function About() {
  return (
    <div className="about-container">
      <div className="description-div">
        <h1>The Title Of This CYOA Game is Really Exciting</h1>
        <h3>
          The description of this game will most definitely make you want to
          play it
        </h3>
        <br />
        <div className="about-image">
          <img id="about-img" src="https://placehold.it/250x175" alt="about" />
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
          <a href="#" id="signup-link">
            Sign up now
          </a>
        </h4>
      </div>
      <Footer />
    </div>
  );
}

export default About;
