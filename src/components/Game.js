import React from "react";

class Game extends React.Component {
  render() {
    const onClick = this.props.onClick;
    //const board = this.props.board

    return (
      <div>
        <h1>Find the treasure!</h1>

        <div className="player_board">

          <div className="row ">
            <button
              className="col s2  waves-effect waves-light btn-large "
              key={10}
              value={1}
              onClick={onClick}
            >
              X
            </button>

            <button
              className="col s2 waves-effect waves-light btn-large"
              key={20}
              value={2}
              onClick={onClick}
            >
              X
            </button>
            <button
              className="col s2 waves-effect waves-light btn-large"
              key={30}
              value={3}
              onClick={onClick}
            >
              X
            </button>
          </div>

          <div className="row ">
            <button
              className="col s2 waves-effect waves-light btn-large "
              key={40}
              value={4}
              onClick={onClick}
            >
              X
            </button>

            <button
              className=" col s2  waves-effect waves-light btn-large"
              key={50}
              value={5}
              onClick={onClick}
            >
              X
            </button>
            <button
              className="col s2 waves-effect waves-light btn-large"
              key={60}
              value={6}
              onClick={onClick}
            >
              X
            </button>
          </div>
          <div className="row ">
            <button
              className="col s2 waves-effect waves-light btn-large "
              key={70}
              value={7}
              onClick={onClick}
            >
              X
            </button>

            <button
              className=" col s2  waves-effect waves-light btn-large"
              key={80}
              value={8}
              onClick={onClick}
            >
              X
            </button>
            <button
              className="col s2 waves-effect waves-light btn-large"
              key={90}
              value={9}
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
