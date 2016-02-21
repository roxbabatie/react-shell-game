
require('normalize.css');
require('styles/App.css');

import React from 'react';
import Cups from './Cups';

var Board = React.createClass({

  render: function () {
    return (
      <div>
        <div className="board">
          <Cups />
          <Cups />
          <Cups />
        </div>
        <button className="button">Start</button>
      </div>
    );
  }
});

export default Board;

