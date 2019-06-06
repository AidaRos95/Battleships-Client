import React from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { buttonClicked } from '../actions'

class GameContainer extends React.Component {
  state = {
    board: [0, 0, 0, 0]
  }

  componentWillMount = () => {
    console.log('EMPTY BOARD', this.state.board)
    const newBoard = this.state.board
    const treasure = Math.floor(Math.random() * 4)
    newBoard[treasure] = 1
    console.log("BOARD:", newBoard)
    return newBoard
  }

  onClick = (event) => {
    console.log('Click received!', event.target.id)
  }

  render() {

    return (
      <Game
        onClick={this.onClick}
        // board={this.newBoard}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    buttonClick: state.buttonClick,
    counter: state.counter
  }
}

const mapDispatchToProps = {
  buttonClicked
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);