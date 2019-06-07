import request from 'superagent'

const baseUrl = 'http://localhost:4000'

// function gameCreated (game) {
//   return {
//     type: 'GAME_CREATED',
//     payload: game
//   }
// }

export const createGame = () => {
  console.log('createGame test!')
  return function dispatcher (dispatch) {
    request
      .post(`${baseUrl}/games`)
      .then(response => {
        console.log('response createGame test:', response)
        // NOT NEEDED BECAUSE OF SOCKET.IO
        // const game = response.body
        // const action = gameCreated(game)
        // dispatch(action)
      })
  }
}

export const createBoard = (board) => {
  return function dispatcher (dispatch) {
    request
      .post(`${baseUrl}/boards`)
      .send(board)
      .then(response => {
        console.log('createBoard response body', response)
      })
  }
}

export const checkBoard = () => {
  console.log('checkBoard test!')
  return function dispatcher (dispatch) {
    request
      .get(`${baseUrl}/boards/:id`)
      .then(response => {
        console.log('checkBoard response body', response)
      })
  }
}