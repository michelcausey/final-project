import React, { Component } from "react";
import Storyboard from "../Storyboard";
import story from "../../story.json";

class Game extends Component {
  state = {
    location: 0

    // location: 0 = Home
    // location: 1 = Woods
    // location: 2 = Castle
    // location: 3 = Cemetery
  };

  //update state based on button pressed
  //pass as a prop onchange
  //send back name of component

  handleBtnClick = event => {
    event.preventDefault();
    console.log("Next Location: ", event.target.innerText);

    if (event.target.innerText === "Home") {
      console.log("go home");
      this.setState({location: this.state.location = 0})
    } else if (event.target.innerText === "Woods") {
      console.log("go to the woods");
      this.setState({location: this.state.location = 1})
    } else if (event.target.innerText === "Castle") {
      console.log("go to the castle");
      this.setState({location: this.state.location = 2})
    } else if (event.target.innerText === "Cemetery") {
      console.log("go to the cemetery");
      this.setState({location: this.state.location = 3})
    } else {
      console.log("try to make this button go away");
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
