import React from 'react';

class Game extends React.Component {
  render() {
    const onClick = this.props.onClick

    return (
      // console.log('TESTING:', this.props.board)
      <div>
        <h1>Find the treasure!</h1>
        <div className="player_board">
          <button key={1} onClick={onClick}>CLICK ME!</button>
          <button key={2} onClick={onClick}>CLICK ME!</button>
          <button key={3} onClick={onClick}>CLICK ME!</button>
          <button key={4} onClick={onClick}>CLICK ME!</button>
        </div>
      </div>
    )
  }
}

export default Game;