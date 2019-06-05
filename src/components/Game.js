import React from 'react';

class Game extends React.Component {
  render() {
    const onClick = this.props.onClick
    const clicked = this.props.clicked

    return (
      <button disabled={clicked} onClick={onClick}>CLICK ME!</button>
    )
  }
}

export default Game;