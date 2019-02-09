import React, { Component } from "react";
import Footer from "../Footer";
import axios from "axios";
import "./style.css";

class Register extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Please enter your first & last name");
    } else if (!this.state.userName) {
      alert("Please select a username");
    } else if (!this.state.password) {
      alert("Please select a password");
    } else {
      alert(`Welcome ${this.state.firstName} ${this.state.lastName}, you have successfully created an account`);
      window.location = "/game"
    }

    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      password: ""
    }, // call axios post - url is your own api route .post('api/users/' , {this.state.firstName , etc.})
    () => {
     axios.post("api/users", {
       firstName: this.state.firstName,
       lastName: this.state.lastName, 
       username: this.state.userName, 
       password: this.state.password
      })
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container-login">
        <p id="welcome-text">Welcome, sign-up below</p>
        <form className="form">
          <input
            id="firstName"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <br />
          <input
            id="lastName"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <br />
          <input
            id="username"
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <button id="submit-button" onClick={this.handleFormSubmit}>
            Submit
          </button>
          <br />
          <p id="register-link">
            Already have a username/password? <a href="/login">log-in here</a>
          </p>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Register;
