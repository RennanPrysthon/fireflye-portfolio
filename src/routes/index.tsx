import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../pages/Home';
import ProjectViewer from '../pages/ProjectViewer';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <h1>Contato</h1>
        </Route>
        <Route path="/project/:id">
          <ProjectViewer />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
