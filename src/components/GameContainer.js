import React from "react";
import Game from "./Game";
import { connect } from "react-redux";
import { createBoard, updateBoard } from "../actions";

class GameContainer extends React.Component {
  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  generateBoard = () => {
    const newBoard = this.state.board;
    const random = Math.floor(Math.random() * 9);
    newBoard[random] = 1;
    this.setState({ board: newBoard });
  };

  componentWillMount = () => {
    this.generateBoard();
  };

  onClick = index => {
    console.log(`Click at: ${index}, value = ${this.state.board[index]}`);

    if (this.state.board[index] === 1) console.log(`WINNER!!`);
  };
  render() {
    return <Game onClick={this.onClick} />;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    buttonClick: state.buttonClick,
    counter: state.counter
  };
}

const mapDispatchToProps = {
  createBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
