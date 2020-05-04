import React from 'react';
import Header from './Header';
import Board from './Board';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Boards from './Boards';

const App = () => {
  return (
    <div className="trello__container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Boards />
          </Route>
          <Route path="/:boardID">
            <Board />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
