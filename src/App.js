import React from 'react';
import { Route } from 'react-router-dom';
import GameContainer from './components/GameContainer'

function App() {
  return (
    <div className="routes">
      <Route exact path="/sessions/:id" component={GameContainer} />
    </div>
  );
}

export default App;
