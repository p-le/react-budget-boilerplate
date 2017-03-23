import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'sanitize.css/sanitize.css';
import "./assets/fontawesome-color.css";

import './assets/favicon.ico';
import App from './containers/App';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
