import React from 'react';
import Game from './Game'

class GameContainer extends React.Component {
  onClick = () => {
    console.log('Click received!')
  }
  
  render () {
    return (
      <Game 
        onClick={this.onClick}
      />
    )
  }
}

export default GameContainer;