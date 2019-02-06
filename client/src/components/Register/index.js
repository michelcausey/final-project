import React from "react";
import Footer from "../Footer"
import "./style.css";


function Register() {
    return (
        <div className="container-register">
            <div className="register-header">
                <h1>Sign-Up to Play:</h1>
            </div>
        <div className="whole-form">
        <div class="form-group">
            <label for="name">First & Last Name</label>
            <input type="name" class="form-control" id="exampleName" aria-describedby="nameHelp" placeholder="Enter name (ex: Jane Doe)" />
        </div>
        <div class="form-group">
            <label for="emailAddress">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email (example_name@email.com)" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Create Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type Your Password" />
        </div>
        
        <a id="no-hover" href="/game"><button type="submit" id="register-button" class="btn btn-primary">Submit</button></a>
        <br />
        <h4 id="register-login">
          Already have an account?{" "}
          <a href="/login" id="signup-link">
            Log-In
          </a>
        </h4>
        
        <Footer />
        </div>
        </div>
    );
  }

export default Register;

