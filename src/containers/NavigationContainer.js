/*eslint-disable */
import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import { connect } from 'react-redux';
import { logOut } from '../redux/session/sessionActions';

import { authenticated } from '../redux/session/sessionSelectors';
import UserProfile from '../components/UserProfile/UserProfile';

class NavigationContainer extends Component {
  render() {
    const { isAuth, logout } = this.props;

    return (
      <>
        <Navigation />
        {isAuth && <UserProfile logout={logout} />}
      </>
    );
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
