import React, { Component } from "react";
import Storyboard from "../Storyboard";
import story from "../../story.json";

class Game extends Component {
  state = {
    location: 0,
  };

  //update state based on button pressed
  //pass as a prop onchange
  //send back name of component

  handleBtnClick = event => {
    event.preventDefault();
    console.log("Next Location: ", event.target.innerText);

    switch (event.target.innerText) {
      // location: 0 = Home
      case "Home":
      this.setState({location: this.state.location = 0})
      break;

      // location: 1 = "Woods"
      case "Woods (Travel East)":
      this.setState({location: this.state.location = 1})
      break;

      // location: 2 = "River"
      case "River (Travel North)":
      this.setState({location: this.state.location = 2})   
      break;
      
      // location: 3 = "Swamp"
      case "Swamp (Travel East)":
      this.setState({location: this.state.location = 3})   
      break;

      // location: 4 = "Cliff"
      case "Cliff (Travel West)":
      this.setState({location: this.state.location = 4})   
      break;

      // location: 5 = "Cemetery"
      case "Cemetery (Travel South)":
      this.setState({location: this.state.location = 5})   
      break;

      // location: 6 = "Castle"
      case "Castle (Travel South)":
      this.setState({location: this.state.location = 6})   
      break;

      // location: 7 = "Church"
      case "Church (Travel West)":
      this.setState({location: this.state.location = 7})   
      break;

      // location: 8 = "Meadow"
      case "Meadow (Travel West)":
      this.setState({location: this.state.location = 8})   
      break;

      // location: 9 = "Mountains"
      case "Mountains (Travel North)":
      this.setState({location: this.state.location = 9})   
      break;

      // location: 10 = "Summit"
      case "Summit (Travel West)":
      this.setState({location: this.state.location = 10})   
      break;

      // location: 11 = "Shack"
      case "Shack (Travel East)":
      this.setState({location: this.state.location = 11})   
      break;

      // location: 12 = "Hidden Path"
      case "Hidden Path (Travel South)":
      this.setState({location: this.state.location = 12})   
      break;

      // location: 13 = "Abandoned Village"
      case "Abandoned Village (Travel South)":
      this.setState({location: this.state.location = 13})   
      break;

      // location: 14 = "Quick Sand"
      case "Quick Sand (Travel West)":
      this.setState({location: this.state.location = 14})   
      break;

      // location: 15 = "Join Coven"
      case "Join Coven":
      this.setState({location: this.state.location = 15})   
      break;

      // location: 16 = "Reject Invitation"
      case "Reject Invitation":
      this.setState({location: this.state.location = 16})   
      break;

      // location: 17 = "Climb Down"
      case "Climb Down":
      this.setState({location: this.state.location = 17})   
      break;

      // location: 18 = "Use the Parachute"
      case "Use the Parachute":
      this.setState({location: this.state.location = 18})   
      break;

      // location: 19 = "Look"
      case "Look":
      this.setState({location: this.state.location = 19})   
      break;

      // location: 20 = "Keep Your Eyes Closed"
      case "Keep Your Eyes Closed":
      this.setState({location: this.state.location = 20})   
      break;

      // location: 21 = "Sneak There"
      case "Sneak There":
      this.setState({location: this.state.location = 21})   
      break;

      // location: 22 = "Run!"
      case "Run!":
      this.setState({location: this.state.location = 22})   
      break;

      // location: 23 = "Participate"
      case "Participate":
      this.setState({location: this.state.location = 23})   
      break;

      // location: 24 = "Politely Decline"
      case "Politely Decline":
      this.setState({location: this.state.location = 24})   
      break;

      // location: 25 = "Fight"
      case "Fight":
      this.setState({location: this.state.location = 25})   
      break;

      // location: 26 = "Sled"
      case "Sled":
      this.setState({location: this.state.location = 26})   
      break;

      // location: 27 = "Disguise Yourself"
      case "Disguise Yourself":
      this.setState({location: this.state.location = 27})   
      break;

      // location: 28 = "Fight Your Way Out"
      case "Fight Your Way Out":
      this.setState({location: this.state.location = 28})   
      break;

      // location: 29 = "Try to go over it"
      case "Try to go over it":
      this.setState({location: this.state.location = 29})   
      break;

      // location: 29 = "Try to go through it"
      case "Try to go through it":
      this.setState({location: this.state.location = 30})   
      break;

      case "Play Again?":
      this.setState({location: this.state.location = 0})
      break;

      default:
      console.log("this isn't a choice")
    }
  };

  render() {
    return (
      <div>
        <div>
          <Storyboard
            name={story[this.state.location].name}
            story={story[this.state.location].story}
            image={story[this.state.location].image}
            movement={story[this.state.location].movement}
            handleBtnClick={this.handleBtnClick}
          />
        </div>
      </div>
    );
  }
}

export default Game;
