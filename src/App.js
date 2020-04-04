import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
import Components from './views/Components/Components.js';
import LandingPage from './views/LandingPage/LandingPage.js';
import ProfilePage from './views/ProfilePage/ProfilePage.js';

import "assets/scss/material-kit-react.scss";

// const indexRoutes = [
//   { path: "/login", name: "LoginPage", component: LoginPage },
//   { path: "/about", name: "AboutPage", component: About },
//   { path: "/", name: "Components", component: App }
// ];

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
