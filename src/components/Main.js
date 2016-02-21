require('normalize.css');
require('styles/App.css');

import React from 'react';

import Board from './Board';

var AppComponent = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="heading">Shell Game</h1>
        <Board />

      </div>
    )
  }
});

export default AppComponent;

