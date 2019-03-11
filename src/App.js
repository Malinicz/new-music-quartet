import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import { ThemeProvider, styledTheme } from 'styles';
import GlobalStyles from 'styles/global';

const App = () => (
  <React.Fragment>
    <Router>
      <ThemeProvider theme={styledTheme}>
        <Routes />
      </ThemeProvider>
    </Router>
    <GlobalStyles />
  </React.Fragment>
);

export default hot(module)(App);
