
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
      state: '',
      wins: 0,
      loses: 0,
      showBall: 'none',
      showShuffle: 'none',
      showStart: 'block',
      restart: 'none',
    }
  },

  startingGame: function() {
    var board = this.state.board;
    if (board[1] == 1) {
      this.setState({showBall: 'block', showShuffle: 'inline-block', restart: 'none',started: true, state: ' ', showStart:'none'})
    }
  },
  shuffle: function() {
    this.setState({showBall: 'none', shuffle: true, showStart: 'none', restart: 'none'});

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

  clickCup: function(cupSelected) {
   if (this.state.board[cupSelected] == 1) {
     this.setState({state: 'you win', finished: true, wins: this.state.wins + 1, showShuffle: 'inline-block'});
   } else {
     this.setState({state: 'you lose', finished: true, loses: this.state.loses + 1, showShuffle: 'inline-block'});
   };
  },

  clickFirst : function() {
    this.clickCup(0);
  },

  clickSec : function() {
  this.clickCup(1);
  },

  clickThird : function() {
  this.clickCup(2);
  },


  render: function () {
    var style = {display: this.state.showBall};
    var styleShuffle = {display: this.state.showShuffle};
    var styleStart = {display: this.state.showStart};
    var wins = this.state.wins;
    var loses = this.state.loses;
    var state = this.state.state;
    return (
      <div>
        <span>Wins:</span>
        <span className="wins">{wins}</span>
        <span>Loses:</span>
        <span className="loses">{loses}</span>
        <span className="state">{state}</span>

        <div className="board">
          <div className="cups" onClick={this.clickFirst}>
            {this.state.board[0]}
          </div>
          <div className="cups" onClick={this.clickSec}>
            {this.state.board[1]}
            <div className="ball" style={style}>
            </div>
          </div>
          <div className="cups" onClick={this.clickThird}>
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

