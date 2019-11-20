/*eslint-disable */

import axios from 'axios';
import {
  loginError,
  loginSuccess,
  loginRequest,
  signupSuccess,
  signupRequest,
  signupError,
} from './sessionActions';

export const login = data => dispatch => {
  dispatch(loginRequest());
  return axios
    .post('http://localhost:4000/login', data)
    .then(user => {
      dispatch(loginSuccess(user.data));
      localStorage.setItem('token', JSON.stringify(user.data.accesstoken));
    })
    .catch(error => dispatch(loginError(error)));
};

export const signup = data => dispatch => {
  dispatch(signupRequest());
  return axios
    .post('http://localhost:4000/register', data)
    .then(response => {
      dispatch(signupSuccess(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.user.token));
    })
    .catch(error => dispatch(signupError(error)));
};
