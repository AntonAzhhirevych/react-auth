/*eslint-disable */
import React from 'react';
import { StyledList, StyledNavLink } from './styles';
import UserProfile from '../UserProfile/UserProfile';

const Navigation = ({ isAuth, logout }) => (
  <StyledList>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="/about">About</StyledNavLink>
    <StyledNavLink to="/account">Account</StyledNavLink>
    {/* <StyledNavLink to="/login">Login</StyledNavLink> */}
    {/* <StyledNavLink to="/signup">Signup</StyledNavLink> */}
    {isAuth && <UserProfile logout={logout} />}
  </StyledList>
);

export default Navigation;
