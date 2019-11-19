import sessionTypes from './sessionTypes';

export const loginRequest = () => ({
  type: sessionTypes.LOGIN_REQUEST,
});

export const loginSuccess = data => ({
  type: sessionTypes.LOGIN_SUCCESS,
  payload: data,
});

//---------
// нужно добавить action для регистрации

// export const signupSuccess = data => ({
//   type: sessionTypes.LOGIN_SUCCESS,
//   payload: data,
// });

// и изметить по всему преложению

//-----------------

export const loginError = error => ({
  type: sessionTypes.LOGIN_ERROR,
  payload: error,
});

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

export const logOut = () => ({
  type: sessionTypes.LOGOUT,
});
