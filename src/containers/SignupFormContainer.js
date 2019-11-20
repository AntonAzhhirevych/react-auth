/*eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm/SignupForm';
import { signup } from '../redux/session/sessionOperation';
import { withRouter } from 'react-router-dom';

class SignupFormContainer extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  handleSubmit = e => {
    const { signupUser, history } = this.props;
    e.preventDefault();
    signupUser({ ...this.state }).then(() => history.replace('/'));

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
      <SignupForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        password={password}
        email={email}
      />
    );
  }
}

const mapDispatchToProps = {
  signupUser: signup,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(SignupFormContainer));
