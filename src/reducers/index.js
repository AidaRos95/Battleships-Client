import { combineReducers } from 'redux'

const users = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return [...state, action.payload]
    case 'USER_LEFT':
      // state.filter(id => {
      //   console.log(action.payload)
      //   if (id !== action.payload) {
      //     return id
      //   }
      return state
      //})
    default:
      return state
  }
}

const board = (state = [], action) => {
  console.log('Board reducer check!!!')
  switch (action.type) {
    case 'BOARD_CREATED':
      return action.payload
    case 'BOARD_FOUND':
      return action.payload
    default:
      return state
  }
}

// const currentUser = (state = {}, action) => {
//   //console.log('currentUser reducer action test:', action)
//   switch (action.type) {
//     case 'NEW_USER':
//       return action.payload
//     default:
//       return state
//   }
// }

const games = (state = [], action) => {
  //console.log('games reducer action test:', action)
  switch (action.type) {
    case 'GAME_CREATED':
      return [...state, action.payload]
    default:
      return state
  }
}

const reducer = combineReducers({ 
  users,
  board,
  //currentUser,
  games
})

export default reducer