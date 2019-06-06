import React from 'react';
import Lobby from './Lobby'
import request from 'superagent'
import { connect } from 'react-redux'
import { createGame } from '../actions'

class LobbyContainer extends React.Component {
  createGame = () => {
    this.props.createGame()
    return console.log('Game created')
  }

  render() {
    return (
      <Lobby 
        createGame={this.createGame}
        games={this.props.games}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = {
  createGame
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);