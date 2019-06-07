import { applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";
import socketset from "socketset";

const socket = socketset("https://tranquil-dusk-80591.herokuapp.com/");
const middleware = applyMiddleware(socket, reduxThunk);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => {
      console.warn("redux devTools disabled!");

      return x;
    };

const enhancer = compose(
  middleware,
  devTools
);
//console.log('reducer test:', reducer)
const store = createStore(reducer, enhancer);
store.dispatch({ type: "SOCKETSET_CONNECT" });

export default store;
