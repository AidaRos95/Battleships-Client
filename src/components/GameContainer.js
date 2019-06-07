import React from "react";
import Game from "./Game";
import { connect } from "react-redux";
import { createBoard, checkBoard } from "../actions";
import swal from "sweetalert";

class GameContainer extends React.Component {
  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  generateBoard = () => {
    const newBoard = this.state.board;
    const random = Math.floor(Math.random() * 9);
    newBoard[random] = 1;
    return newBoard;
  };

  componentWillMount = () => {
    // this.props.checkBoard();

    const board = this.generateBoard();
    this.props.createBoard(board);
    console.log("Board created");
  };

  onClick = event => {
    const values = Object.values(this.props.board);
    const treasure = values.indexOf(1);
    const button = parseInt(event.target.value);

    if (button === treasure) {
      return swal({
        text: "TREASURE FOUND!",
        buttons: "OK",
        icon: "success"
      });
    } else {
      return console.log("Wrong answer");
    }
  };

  render() {
    const board = this.props.board;
    console.log("BOARD:", board);

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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
