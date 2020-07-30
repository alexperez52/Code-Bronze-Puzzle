import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    turn: 0,
    possibilities: ['a', 'b', 'c', 'd', 'e', 'f'],
    current: []
  }

  componentDidMount() {

  }

  play() {
    /*
    Make random guess
    Get feedback e.g (2 0)
    Filter possible results
    Choose the one that yields best results
  */
    if (this.state.turn % 2 === 0) {
      let firstGuess = ['a', 'b', 'c'];
      this.setState({ current: firstGuess });
    }
    else {
      let firstGuess = ['c', 'b', 'a'];
      this.setState({ current: firstGuess });
    }

    var upCount = this.state.turn + 1;
    this.setState({ turn: upCount });

  }



  render() {

    return (
      <div>

        {this.state.current}
        <input placeholder="correct"></input>
        <input placeholder="correct location"></input>
        <button onClick={() => this.play()}> submit </button>
      </div>
    );
  }
}

export default App;
