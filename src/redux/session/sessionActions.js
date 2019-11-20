import sessionTypes from './sessionTypes';

// login

export const loginRequest = () => ({
  type: sessionTypes.LOGIN_REQUEST,
});

export const loginSuccess = data => ({
  type: sessionTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginError = error => ({
  type: sessionTypes.LOGIN_ERROR,
  payload: error,
});

// signup

export const signupRequest = () => ({
  type: sessionTypes.SIGNUP_REQUEST,
});

export const signupSuccess = data => ({
  type: sessionTypes.SIGNUP_SUCCESS,
  payload: data,
});

export const signupError = error => ({
  type: sessionTypes.SIGNUP_ERROR,
  payload: error,
});

// logOut

export const logOut = () => ({
  type: sessionTypes.LOGOUT,
});
