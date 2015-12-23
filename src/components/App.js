import React, { Component } from 'react'
import Game from './Game'

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <h1>Tic Tac Toe</h1>
              <div className="col-xs-6 col-xs-offset-3">
                  <Game></Game>
              </div>
          </div>
      </div>
    );
  }
}
