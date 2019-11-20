/*eslint-disable */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import AccountPage from './pages/Account/Account';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import Navigation from '../containers/NavigationContainer';
import PrivateRoute from './PrivateRoute';
import { authenticated } from '../redux/session/sessionSelectors';

const App = ({ isAuth }) => {
  return (
    <div>
      {isAuth && <Navigation />}
      <Switch>
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: authenticated(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);
