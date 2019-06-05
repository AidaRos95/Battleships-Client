import request from 'superagent'

export function buttonClicked (clicked) {
  console.log('CLICK RECEIVED IN ACTION CREATOR WITH VALUE:', clicked)

  return { type: 'BUTTON_CLICKED',
  payload: 'click' }
}

export function incrementCounter (counter) {
  console.log('CURRENT COUNTER BEFORE INCREMENT:', counter)

  return {
    type: 'INCREMENT_COUNTER',
    payload: counter + 1
  }
}