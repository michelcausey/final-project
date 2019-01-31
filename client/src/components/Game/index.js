import React, {Component} from "react";
import Storyboard from "../Storyboard"
import story from "../../story.json"

class Game extends Component {
    state = {

    }

render() {
    return (
      <div>
        <div>
            <Storyboard
              id={story[0].id}
              image={story[0].image}
              text={story[0].text}
              options={story[0].options}
            />
        </div>
      </div>
    );
  }
}

export default Game;