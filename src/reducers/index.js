import { combineReducers } from 'redux'

const TURN_TAKEN = 'TURN_TAKEN'
const turns = (state = [], action) => {
  switch (action.type) {
    case TURN_TAKEN:
      return action.payload
    default:
      return state
  }
}

const CLICKED = 'CLICKED'
const buttonClick = (state = false, action) => {
  switch (action.type) {
    case CLICKED:
      return action.payload
    default:
      return state
  }
}

const reducer = combineReducers({ 
  turns,
  buttonClick
})

export default reducer