/*eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../shared/Form/Form';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import Label from '../shared/Label/Label';

const SignupForm = ({ email, password, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Label>
      Email
      <Input type="email" name="email" value={email} onChange={handleChange} />
    </Label>
    <Label>
      Password
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
    </Label>
    <Button label="Signup" type="submit">
      Submit
    </Button>
    <NavLink to="/login">Sign In</NavLink>
  </Form>
);

export default SignupForm;
