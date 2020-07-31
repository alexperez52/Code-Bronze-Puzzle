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
    current: [],

  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log(this.state.current);
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



  render() {

    return (
      <div>
        <div>
          Tap on image to guess
        {this.state.possibilities.map((items, index) =>
          <img src={items}
            key={index}
            onClick={() => this.play(index)}></img>
        )}
        </div>


        <div>
          Current guess
        {this.state.current.map((items, index) =>
          <img key={index} src={this.state.possibilities[items]}></img>
        )}
        </div>
        <div>
          <button onClick={() => this.clear()}>clear</button>
        </div>
      </div>
    );
  }
}

export default App;
