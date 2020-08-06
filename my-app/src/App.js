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
    maxTurns: [],
    possibilities: [{
      picture: BKnife,
      name: "B-Knife"
    }, {
      picture: Fan,
      name: "Fan"
    }, {
      picture: Mask,
      name: "Mask"
    }, {
      picture: Revolver,
      name: "Revolver"
    }, {
      picture: Torch,
      name: "Torch Lamp"
    }, {
      picture: WoodBlock,
      name: "Wood Block"
    }],
    computer: [],
    current: [],
    correctNum: 0,
    correctPos: 0,
    guesses: []

  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log(this.state.guesses);
  }


  play(e) {

    if (this.state.current.length < 3 && !this.state.current.includes(e)) {
      this.setState({ current: [...this.state.current, e] })
    }
  }

  clear() {
    this.setState({ current: [] })
  }
  async checkAnswer(e) {
    const arr = [];
    if (this.state.computer.length === 0) {
      while (arr.length < 3) {
        var r = Math.floor(Math.random() * 6);
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      await this.setState({ computer: arr });
    }


    const computer_comb = this.state.computer;
    var cn = 0;
    var cp = 0;
    for (var i = 0; i < computer_comb.length; i++) {
      if (computer_comb[i] === this.state.current[i]) {
        cp = cp + 1;
      }
      if (computer_comb.includes(this.state.current[i])) {
        cn = cn + 1;
      }
    }

    const past_guesses = {
      pictures: this.state.current,
      correct_num: cn,
      correct_pos: cp
    }
    const arr2 = this.state.guesses;
    arr2.push(past_guesses);
    this.setState({ guesses: arr2 });

    this.setState({ correctNum: cn, correctPos: cp });


  }


  render() {

    return (
      <div className="container-div">

        <div className="top-container-div">

          <div className="left-div">
            <div className="guess-div">
              <div>
                <div>
                  Current guess
            </div>

                {this.state.current.map((items, index) =>
                  <div className="item-bar">
                    <img key={index} src={this.state.possibilities[items].picture}></img>
                  </div>
                )}
              </div>
            </div>



            <div className="guess-container">

              {this.state.guesses.map((items, index) =>
                <div>
                  <div>
                    {items.correct_num}
                    {items.correct_pos}
                  </div>
                  <div>
                    {this.state.guesses[index].pictures.map((pics, index) =>
                      <img src={this.state.possibilities[pics].picture}></img>)}
                  </div>
                </div>
              )}
            </div>



            <div>

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





          <div className="right-div">

            <div>
              Tap on image to guess
          </div>


            {this.state.possibilities.map((items, index) =>
              <div className="item-bar">

                <div>
                  <img src={items.picture}
                    key={index}
                    onClick={() => this.play(index)}></img>
                </div>
                <label>
                  {items.name}
                </label >
              </div>
            )}
          </div>
        </div>



        <div className="bottom-container-div">
          bottom div
        </div>


      </div>
    );
  }
}

export default App;
