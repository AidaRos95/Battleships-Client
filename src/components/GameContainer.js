import React from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { createBoard, updateBoard } from '../actions'

class GameContainer extends React.Component {
  state = {
    board: [0, 0, 0, 0]
  }

  generateBoard = () => {
    const newBoard = this.state.board
    const random = Math.floor(Math.random() * 4)
    newBoard[random] = 1
    return newBoard
  }
  
  componentWillMount = () => {
    const board = this.generateBoard()
    console.log("BOARD:", board)
    this.props.createBoard(board)
    console.log('Board created')
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
  createBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);