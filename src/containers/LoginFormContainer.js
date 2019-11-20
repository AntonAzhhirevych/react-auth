/*eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import { login } from '../redux/session/sessionOperation';
import { authenticated } from '../redux/session/sessionSelectors';

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  handleSubmit = e => {
    const { loginUser, history } = this.props;
    e.preventDefault();
    loginUser({ ...this.state }).then(() => history.replace('/'));
    this.reset();
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { password, email } = this.state;
    return (
      <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        password={password}
        email={email}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: authenticated(state),
});

const mapDispatchToProps = {
  loginUser: login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LoginFormContainer));
