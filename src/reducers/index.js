import { combineReducers } from 'redux'

const buttonClick = (state = [], action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return [...state, action.payload]
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return action.payload
    case 'USER_LEFT':
      // state.filter(id => {
      //   console.log(action.payload)
      //   if (id !== action.payload) {
      //     return id
      //   }
      return null
      //})
    break;
    default:
      return state
  }
}

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return action.payload
    default:
      return state
  }
}

const reducer = combineReducers({ 
  buttonClick,
  users,
  counter
})

export default reducer