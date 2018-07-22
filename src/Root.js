import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import LoginPage from './views/LoginPage/LoginPage';
import Components from './views/Components/Components';
import LandingPage from './views/LandingPage/LandingPage';
import ProfilePage from './views/ProfilePage/ProfilePage';

import "./assets/scss/material-kit-react.css";

// const indexRoutes = [
//   { path: "/login", name: "LoginPage", component: LoginPage },
//   { path: "/about", name: "AboutPage", component: About },
//   { path: "/", name: "Components", component: App }
// ];

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
