import React, { Component } from 'react';
import './App.css';
import BKnife from './images/bknife.png';
import Fan from './images/fan.png';
import Mask from './images/mask.png';
import Revolver from './images/revolver.png';
import Torch from './images/torchlamp.png';
import WoodBlock from './images/woodblock.png';

class App extends Component {

  state = {
    turn: 0,
    possibilities: [BKnife, Fan, Mask, Revolver, Torch, WoodBlock],
    computer: [],
    current: [],
    correctNum: 0,
    correctPos: 0

  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log(this.state.current);
    console.log(this.state.computer);
  }


  play(e) {
    /*
    Make random guess
    Get feedback e.g (2 0)
    Filter possible results
    Choose the one that yields best results
  */
    console.log(e);
    if (this.state.current.length < 3 && !this.state.current.includes(e)) {
      this.setState({ current: [...this.state.current, e] })
    }
  }

  clear() {
    this.setState({ current: [] })
  }
  checkAnswer(e) {
    const arr = [];
    if (this.state.computer.length == 0) {
      while (arr.length < 3) {
        var r = Math.floor(Math.random() * 6);
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      this.setState({ computer: arr });
    }

  }


  render() {

    return (
      <div>
        <div>
          <div>
            Tap on image to guess
          </div>
          {this.state.possibilities.map((items, index) =>
            <img src={items}
              key={index}
              onClick={() => this.play(index)}></img>
          )}
        </div>


        <div>
          <div>
            Current guess
          </div>

          {this.state.current.map((items, index) =>
            <img key={index} src={this.state.possibilities[items]}></img>
          )}
        </div>
        <div>
          <button onClick={() => this.clear()}>clear</button>
          <button onClick={() => this.checkAnswer(this.state.current)}>submit</button>
        </div>

        <div>
          <div>
            Correct Items:
            {this.state.correctNum}
          </div>
          <div>
            Correct position:
            {this.state.correctPos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
