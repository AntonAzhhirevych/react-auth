import React from 'react';
import StyledForm from './styled';

const Form = ({ onSubmit = () => null, children }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

export default Form;
