import React, { Component } from "react";
import Storyboard from "../Storyboard";
import story from "../../story.json";

class Game extends Component {
  state = {
    location: 0
  };

  //update state based on button pressed
  //pass as a prop onchange
  //send back name of component

  handleBtnClick = event => {
    event.preventDefault();
    console.log("Next Location: ", event.target.innerText);

    if (event.target.innerText === "Home") {
      console.log("go home");
    } else if (event.target.innerText === "Woods") {
      console.log("go to the woods");
      this.setState({location: this.state.location + 1})
    } else if (event.target.innerText === "Castle") {
      console.log("go to the castle");
    } else if (event.target.innerText === "Cemetery") {
      console.log("go to the cemetery");
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
