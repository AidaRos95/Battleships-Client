import React from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { createBoard } from '../actions'

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
    this.props.createBoard(board)
    console.log('Board created')
  }

  onClick = (event) => {
    console.log('Click received!', event.target)
    const values = Object.values(this.props.board)
    const treasure = values.indexOf(1)
    console.log('treasure:', treasure)
    console.log(event.target.value)
    const button = parseInt(event.target.value)
    
    if (button === treasure) {
      return console.log('Congratulations! You found the treasure!')
    } else {
      return console.log('Wrong answer')
    }
  }

  render() {
    const board = this.props.board
    console.log("BOARD:", board)

    return (
      <Game
        onClick={this.onClick}
        board={board}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    board: state.board
  }
}

const mapDispatchToProps = {
  createBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);