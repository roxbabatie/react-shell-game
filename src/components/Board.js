
require('normalize.css');
require('styles/App.css');

import React from 'react';


var Board = React.createClass({
  getInitialState: function () {
    var board = [0,1,0];
    console.log(board);
    return {
      board: board,
      started: false,
      shuffle: false,
      finished: false,
      wins: 0,
      looses: 0,
      selected: 0,
      showBall: 'none',
      showShuffle: 'none',
      showStart: 'block'
    }
  },

  startingGame: function() {
    var board = this.state.board;
    if (board[1] == 1) {
      this.setState({showBall: 'block', showShuffle: 'inline-block', started: true, showStart:'none'})
    }
  },
  shuffle: function() {
    this.setState({showBall: 'none', shuffle: true, showStart: 'none'});

    var boardArray = this.state.board;
    var index = boardArray.length;
    var obj = {};
    var randomIndex;
    while (0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index = index-1;
      obj = boardArray[index];
      boardArray[index] = boardArray[randomIndex];
      boardArray[randomIndex] = obj;
    }
    this.setState({board:boardArray})
  },
  render: function () {
    var style = {display: this.state.showBall};
    var styleShuffle = {display: this.state.showShuffle};
    var styleStart = {display: this.state.showStart};
    return (
      <div>
        <div className="board">
          <div className="cups">
            {this.state.board[0]}
          </div>
          <div className="cups">
            {this.state.board[1]}
            <div className="ball" style={style}>
            </div>
          </div>
          <div className="cups">
            {this.state.board[2]}
          </div>
        </div>
        <button className="button" style={styleStart} onClick={this.startingGame}>Start</button>
        <button className="button" style={styleShuffle} onClick={this.shuffle}>Shuffle</button>
      </div>
    );
  }
});

export default Board;

