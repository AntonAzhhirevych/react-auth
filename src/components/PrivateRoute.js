/*eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authenticated } from '../redux/session/sessionSelectors';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      render={props => {
        return authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
      {...rest}
    />
  );
};

const mapStateToProps = state => ({
  authenticated: authenticated(state),
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRoute);
