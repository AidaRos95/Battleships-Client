import React from "react";

class Game extends React.Component {
  render() {

    const onClick = this.props.onClick
    //const board = this.props.board

    return (
      <div>
        <h1>Find the treasure!</h1>

        <div className="player_board">
          <div className="row ">
            <button
              className="col s2  waves-effect waves-light btn-large "
              key={1}
              onClick={onClick}
            >
              X
            </button>

            <button
              className="col s2 waves-effect waves-light btn-large"
              key={2}
              onClick={onClick}
            >
              X
            </button>
            <button
              className="col s2 waves-effect waves-light btn-large"
              key={3}
              onClick={onClick}
            >
              X
            </button>
          </div>

          <div className="row ">
            <button
              className="col s2 waves-effect waves-light btn-large "
              key={4}
              onClick={onClick}
            >
              X
            </button>

            <button
              className=" col s2  waves-effect waves-light btn-large"
              key={5}
              onClick={onClick}
            >
              X
            </button>
            <button
              className="col s2 waves-effect waves-light btn-large"
              key={6}
              onClick={onClick}
            >
              X
            </button>
          </div>
          <div className="row ">
            <button
              className="col s2 waves-effect waves-light btn-large "
              key={7}
              onClick={onClick}
            >
              X
            </button>

            <button
              className=" col s2  waves-effect waves-light btn-large"
              key={8}
              onClick={onClick}
            >
              X
            </button>
            <button
              className="col s2 waves-effect waves-light btn-large"
              key={9}
              onClick={onClick}
            >
              X
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default Game;
