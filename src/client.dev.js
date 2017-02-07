import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/createStore.dev';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
require("./styles/layout.css");
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
