import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Films from 'containers/Films/Films';
import Home from './components/Home';
import Characters from 'containers/Characters/Characters';
export default (
  <Route path="/" component={App}>
    <IndexRoute  component={Home}/>
    <Route path={"/films"} component={Films}/>
    <Route path={"/people/:id"} component={Characters}/>
  </Route>
);
