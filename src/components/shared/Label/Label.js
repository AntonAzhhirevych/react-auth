import React from 'react';
import StyledLabel from './styled';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

export default Label;
