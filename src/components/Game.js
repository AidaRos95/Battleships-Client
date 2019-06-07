import React from 'react';

class Game extends React.Component {
  render() {
    const onClick = this.props.onClick
    //const board = this.props.board

    return (
      <div>
        <h1>Find the treasure!</h1>
        <div className="player_board">
          <button key={10} value={1} onClick={onClick}>CLICK ME!</button>
          <button key={20} value={2} onClick={onClick}>CLICK ME!</button>
          <button key={30} value={3} onClick={onClick}>CLICK ME!</button>
          <button key={40} value={4} onClick={onClick}>CLICK ME!</button>
        </div>
      </div>
    )
  }
}

export default Game;