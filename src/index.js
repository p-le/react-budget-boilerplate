import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.css';

import 'sanitize.css/sanitize.css';
import "./public/fontawesome-color.css";
import './public/favicon.ico';

import App from './containers/App';
import Protected from './containers/Protected';
import Login from './containers/Login';
import AuthRoute from './containers/AuthRoute';
import configureStore from './store';

injectTapEventPlugin();

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <AuthRoute path="/protected" component={Protected} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
