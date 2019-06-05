import React from 'react';
import Game from './Game'

class GameContainer extends React.Component {
  state = {
    clicked: false
  }

  onClick = () => {
    console.log('Click received!')
    this.setState({
      clicked: true
    })
    console.log('STATE UPDATED:', this.state)
  }

  render() {
    return (
      <Game
        onClick={this.onClick}
        clicked={this.state.clicked}
      />
    )
  }
}

export default GameContainer;