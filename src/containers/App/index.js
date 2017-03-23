import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" /> 
      App
    </div>
  </MuiThemeProvider>
);

export default App;
