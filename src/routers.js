import React from 'react';
import { Route, Redirect } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';

import Home from './pages/home';

const Routes = () => (
  <HashRouter>
    <React.Fragment>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </React.Fragment>
  </HashRouter>
)

export default Routes;