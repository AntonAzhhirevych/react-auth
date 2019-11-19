/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../shared/Form/Form';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import Label from '../shared/Label/Label';

const LoginForm = ({ email, password, handleChange, handleSubmit }) => (
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
    <Button label="Log In" type="submit">
      Submit
    </Button>
    <NavLink to="/signup">Signup</NavLink>
  </Form>
);

export default LoginForm;
