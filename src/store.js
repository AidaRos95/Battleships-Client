import { applyMiddleware, createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'
import socketset from 'socketset'

const socket = socketset('localhost:4000')
const middleware = applyMiddleware(socket, reduxThunk)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(middleware, devTools)
const store = createStore(reducer, enhancer)
store.dispatch({ type: 'SOCKETSET_CONNECT' })

export default store