import React from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { createBoard, checkBoard } from '../actions'
import { async } from 'q';

class GameContainer extends React.Component {
  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  generateBoard = () => {
    const newBoard = this.state.board
    const random = Math.floor(Math.random() * 9)
    newBoard[random] = 1
    return newBoard
  }
  
  componentWillMount = async () => {
    const id = this.props.match.params.id
    await this.props.checkBoard(id)
    console.log("AASADNAKFAKJFNKJANDF",this.props.board)
    
    

    const board = this.generateBoard()
    this.props.createBoard(board)
    return console.log('Board created')
  }

  onClick = (event) => {
    const values = Object.values(this.props.board)
    const treasure = values.indexOf(1)
    const button = parseInt(event.target.value)

    if (button === treasure) {
      return console.log("Congratulations! You found the treasure!");
    } else {
      return console.log("Wrong answer");
    }
  };

  render() {
    const board = this.props.board;
    console.log("BOOOOOARD",this.props.board)
    return <Game onClick={this.onClick} board={board} />;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    board: state.board
  };
}

const mapDispatchToProps = {
  createBoard,
  checkBoard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
