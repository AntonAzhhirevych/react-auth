/*eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import { login } from '../redux/session/sessionOperation';

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  handleSubmit = e => {
    const { loginUser } = this.props;
    e.preventDefault();
    loginUser({ ...this.state });
    console.log(this.state);
    console.log('this.props', this.props);
    console.log('LOGIN');
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

const mapDispatchToProps = {
  loginUser: login,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginFormContainer);
