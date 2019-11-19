/*eslint-disable */
import { combineReducers } from 'redux';
import sessionTypes from './sessionTypes';

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case sessionTypes.LOGIN_SUCCESS:
      return payload;
    case sessionTypes.SIGNUP_SUCCESS:
      return payload;

    case sessionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case sessionTypes.LOGIN_SUCCESS:
      return payload.accesstoken;
    case sessionTypes.SIGNUP_SUCCESS:
      return payload.token;
    case sessionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case sessionTypes.LOGIN_SUCCESS:
      return true;
    case sessionTypes.SIGNUP_SUCCESS:
      return true;
    case sessionTypes.LOGOUT:
      return false;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  error,
});
