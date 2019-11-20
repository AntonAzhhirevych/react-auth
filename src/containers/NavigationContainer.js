/*eslint-disable */
import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import { connect } from 'react-redux';
import { logOut } from '../redux/session/sessionActions';
import { authenticated } from '../redux/session/sessionSelectors';

class NavigationContainer extends Component {
  render() {
    const { isAuth, logout } = this.props;

    return <Navigation isAuth={isAuth} logout={logout} />;
  }
}

const mapStateToProps = state => ({
  isAuth: authenticated(state),
});

const mapDispatchToProps = {
  logout: logOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationContainer);
