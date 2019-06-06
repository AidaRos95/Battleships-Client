import React from 'react';
import { Link } from 'react-router-dom'

class Lobby extends React.Component {
  render() {
    console.log('Lobby this.props test:', this.props)
    const createGame = this.props.createGame
    const loadGame = this.props.loadGame
    const gameList = this.props.games.map(game => {
      return <Link key={game.id} to={`games/${game.id}`}>{game.id}</Link>
    })
    
    return (
      <div>
        <button onClick={createGame}>Create Game</button>
        <button onClick={loadGame}>Load Game</button>
        Active games:
        {gameList}
      </div>
    )
  }
}

export default Lobby;