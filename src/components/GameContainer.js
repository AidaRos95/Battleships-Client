import React from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { buttonClicked } from '../actions'

class GameContainer extends React.Component {
  state = {
    clicked: false
  }

  onClick = () => {
    console.log('Click received!')
    if (this.state.clicked === false) {
      this.setState({clicked: true})
    } else {
      this.setState({clicked: false})
    }
    this.props.buttonClicked(this.state.clicked)
    console.log('STATE UPDATED:', this.state)
    console.log('THIS.PROPS.COUNTER:', this.props.counter)
  }

  render() {
    return (
      <Game
        onClick={this.onClick}
        clicked={this.state.clicked}
        counter={this.props.counter}
        
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    buttonClick: state.buttonClick,
    counter: state.counter
  }
}

const mapDispatchToProps = {
  buttonClicked
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);