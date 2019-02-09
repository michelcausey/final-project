import React, { Component } from "react";
import Footer from "../Footer"
import "./style.css";

class Login extends Component {
    // Setting the component's initial state
    state = {
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
      if (!this.state.userName || !this.state.password) {
        alert("You must enter your username & password");
      } else {
        alert(`Welcome back ${this.state.userName}, you have successfully logged in`);
        
      }
  
      this.setState({
        userName: "",
        password: ""
      });
    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div className="container-login">
          <p id="welcome-text">
            Welcome Back, log-in to continue
          </p>
          <form className="form">
            <input id="username"
              value={this.state.userName}
              name="userName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Email Address"
            /><br></br>
            <input id="password"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <br></br>
            <button id="submit-button" onClick={this.handleFormSubmit}>Submit</button>
            <br></br>
            <p id="register-link">Don't have a username/password? <a href="/register">sign-up here</a></p>
          </form>
          <Footer />
          </div>
      );
    }
  }
  

export default Login;




