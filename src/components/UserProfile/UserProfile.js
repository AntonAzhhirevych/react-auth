/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ logout }) => (
  <Link onClick={() => logout()} to="/login">
    Log Out
  </Link>
);

export default UserProfile;
