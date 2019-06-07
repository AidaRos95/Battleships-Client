import React from "react";
import { Link } from "react-router-dom";

class Lobby extends React.Component {
  render() {
    const createGame = this.props.createGame;
    const loadGame = this.props.loadGame;
    const gameList = this.props.games.map(game => {
      return (
        <Link key={game.id} to={`games/${game.id}`}>
          <h5>{game.id}</h5>
        </Link>
      );
    });

    return (
      <div>
        <h1>Find the Treasure</h1>
        <a
          className=" col s2  waves-effect waves-light btn-large"
          key={1}
          onClick={createGame}
        >
          Create Game
        </a>
        <a
          className=" col s2  waves-effect waves-light btn-large"
          key={2}
          onClick={loadGame}
        >
          Load Game
        </a>
        <br />
        <br />
        <h5>Active Games: </h5>
        {gameList}
      </div>
    );
  }
}

export default Lobby;
