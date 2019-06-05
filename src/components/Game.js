import React from 'react';

class Game extends React.Component {
  render() {
    const onClick = this.props.onClick
    
    return (
      <button onClick={onClick}>CLICK ME!</button>
    )
  }
}

export default Game;