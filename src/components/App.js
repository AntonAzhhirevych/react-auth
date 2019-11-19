import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import AccountPage from './pages/Account/Account';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import Navigation from '../containers/NavigationContainer';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <div>
      <Navigation />
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

export default App;
