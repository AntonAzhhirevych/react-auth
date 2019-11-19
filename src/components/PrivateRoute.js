/*eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import { Redirect, Route } from 'react-router-dom';
import { authenticated } from '../redux/session/sessionSelectors';

// перейменувоємо компонент який приходить через пропс
// component: Component
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  console.log(authenticated);
  console.log(Component);
  console.log(rest);

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
