import React, {Component} from "react";
import Storyboard from "../Storyboard"
import story from "../../story.json"


class Game extends Component {
    state = {
      name: story[0].Home.name,
      story: story[0].Home.story,
      image: story[0].Home.image,
      movement: story[0].Home.movement
    }

//update state based on button pressed
//pass as a prop onchange
//send back name of component

render() {
    return (
      <div>
        <div>
            <Storyboard
              name={this.state.name}
              story={this.state.story}
              image={this.state.image}
              movement={this.state.movement}
            />
        </div>
      </div>
    );
  }
}

export default Game;