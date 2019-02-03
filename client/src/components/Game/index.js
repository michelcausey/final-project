import React, { Component } from "react";
import Storyboard from "../Storyboard";
import story from "../../story.json";

class Game extends Component {
  state = {
    location: 0,
    results: 0
  };

  //update state based on button pressed
  //pass as a prop onchange
  //send back name of component

  handleBtnClick = event => {
    event.preventDefault();
    console.log("Next Location: ", event.target.innerText);

    // location: 0 = Home
    if (event.target.innerText === "Home") {
      console.log("go home");
      this.setState({location: this.state.location = 0})
    // location: 1 = Woods
    } else if (event.target.innerText === "Woods") {
      console.log("go to the woods");
      this.setState({location: this.state.location = 1})
    // location: 2 = River
    } else if (event.target.innerText === "River") {
      console.log("go to the river");
      this.setState({location: this.state.location = 2})
    // location: 3 = Swamp
    } else if (event.target.innerText === "Swamp") {
      console.log("go to the swamp");
      this.setState({location: this.state.location = 3})
    // location: 4 = Cliff
    } else if (event.target.innerText === "Cliff") {
      console.log("go to the cliff");
      this.setState({location: this.state.location = 4})
    }
    // location: 5 = Cemetery
    else if (event.target.innerText === "Cemetery") {
      console.log("go to the cemetery");
      this.setState({location: this.state.location = 5})
    }
    // location: 6 = Castle
    else if (event.target.innerText === "Castle") {
      console.log("go to the castle");
      this.setState({location: this.state.location = 6})
    }
    // location: 7 = Church
    else if (event.target.innerText === "Church") {
      console.log("go to the church");
      this.setState({location: this.state.location = 7})
    }
    // location: 8 = Meadow
    else if (event.target.innerText === "Meadow") {
      console.log("go to the meadow");
      this.setState({location: this.state.location = 8})
    }
    // location: 9 = Mountains
    else if (event.target.innerText === "Mountains") {
      console.log("go to the mountains");
      this.setState({location: this.state.location = 9})
    }
    // location: 10 = Summit
    else if (event.target.innerText === "Summit") {
      console.log("go to the summit");
      this.setState({location: this.state.location = 10})
    }
    // location: 11 = Shack
    else if (event.target.innerText === "Shack") {
      console.log("shack doesn't look too scary");
      this.setState({location: this.state.location = 11})
    }
    // location: 12 = Hidden Path
    else if (event.target.innerText === "Hidden Path") {
      console.log("always a good idea");
      this.setState({location: this.state.location = 12})
    }
    // location: 13 = Abandoned Village
    else if (event.target.innerText === "Abandoned Village") {
      console.log("why not?");
      this.setState({location: this.state.location = 13})
    } 
    // location: 14 = Quick Sand
    else if (event.target.innerText === "Quick Sand") {
      console.log("you know you can't win this one");
      this.setState({location: this.state.location = 14})
    }
    // location: 15 = Join Coven
    else if (event.target.innerText === "Join Coven") {
      console.log("your a witch, hermoine");
      this.setState({location: this.state.location = 15})
    }
    // location: 16 = Reject Invitation
    else if (event.target.innerText === "Reject Invitation") {
      console.log("what did you call me?");
      this.setState({location: this.state.location = 16})
    }
    // location: 17 = Climb Down
    else if (event.target.innerText === "Climb Down") {
      console.log("seems like a bad plan");
      this.setState({location: this.state.location = 17})
    }
    // location: 18 = Use the Parachute
    else if (event.target.innerText === "Use the Parachute") {
      console.log("try it out");
      this.setState({location: this.state.location = 18})
    }
    // location: 19 = Look
    else if (event.target.innerText === "Look") {
      console.log("(o)-(o)");
      this.setState({location: this.state.location = 19})
    }
    // location: 20 = Keep Your Eyes Closed
    else if (event.target.innerText === "Keep Your Eyes Closed") {
      console.log("(x)-(x)");
      this.setState({location: this.state.location = 20})
    }
    // location: 21 = Sneak There
    else if (event.target.innerText === "Sneak There") {
      console.log("shh");
      this.setState({location: this.state.location = 21})
    }
    // location: 22 = Run!
    else if (event.target.innerText === "Run!") {
      console.log("goooooo");
      this.setState({location: this.state.location = 22})
    }
    // location: 23 = Participate
    else if (event.target.innerText === "Participate") {
      console.log("be flexible");
      this.setState({location: this.state.location = 23})
    }
    // location: 24 = Politely Decline
    else if (event.target.innerText === "Participate") {
      console.log("please no");
      this.setState({location: this.state.location = 24})
    }
    // location: 25 = Fight
    else if (event.target.innerText === "Fight") {
      console.log("please no");
      this.setState({location: this.state.location = 25})
    }
    // location: 26 = Sled
    else if (event.target.innerText === "Sled") {
      console.log("sled");
      this.setState({location: this.state.location = 26})
    }
    // location: 27 = Disguise Yourself
    else if (event.target.innerText === "Disguise Yourself") {
      console.log("disguise");
      this.setState({location: this.state.location = 27})
    }
    // location: 28 = Fight Your Way Out
    else if (event.target.innerText === "Fight Your Way Out") {
      console.log("at least try");
      this.setState({location: this.state.location = 28})
    }
    // location: 29 = Try to go over it
    else if (event.target.innerText === "Try to go over it") {
      console.log("rip vine");
      this.setState({location: this.state.location = 29})
    }
    // location: 30 = Try to go through it
    else if (event.target.innerText === "Try to go through it") {
      console.log("nope");
      this.setState({location: this.state.location = 30})
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
