import React from 'react';

class Game extends React.Component {
  render() {
    const onClick = this.props.onClick
    // const clicked = this.props.clicked
    const counter = this.props.counter

    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>CLICK ME!</button>
      </div>
    )
  }
}

export default Game;