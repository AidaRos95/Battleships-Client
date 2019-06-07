import React from "react";
import { Route, Redirect } from "react-router-dom";
import GameContainer from "./components/GameContainer";
import LobbyContainer from "./components/LobbyContainer";

function App() {
  return (
    <div className="routes">
      <Route exact path="/" render={() => <Redirect to="/games" />} />

      <Route exact path="/games/:id" component={GameContainer} />
      <Route exact path="/games" component={LobbyContainer} />
    </div>
  );
}

export default App;
