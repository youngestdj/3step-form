import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import NotFound from '../views/404';
import Home from '../views/Home';
import SuccessMessage from '../views/SuccessMessage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/success-message" exact component={SuccessMessage} />
  </Switch>
);

export default Routes;
