import React from 'react';
import { StyledList, StyledNavLink } from './styles';

const Navigation = () => (
  <StyledList>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="/about">About</StyledNavLink>
    <StyledNavLink to="/account">Account</StyledNavLink>
    <StyledNavLink to="/login">Login</StyledNavLink>
    <StyledNavLink to="/signup">Signup</StyledNavLink>
  </StyledList>
);

export default Navigation;
