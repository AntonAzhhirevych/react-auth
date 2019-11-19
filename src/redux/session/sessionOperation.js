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

// credentials-полномочия
export const login = data => dispatch => {
  dispatch(loginRequest());
  axios
    .post('http://localhost:4000/login', data)
    .then(user => {
      dispatch(loginSuccess(user.data));
      // console.log(user.data);
      //Добавляем токен в локал сторедж
      localStorage.setItem('token', JSON.stringify(user.accesstoken));
    })
    .catch(error => console.log(error));
  console.log('sffsf');
};

export const signup = data => dispatch => {
  dispatch(signupRequest());
  axios
    .post('http://localhost:4000/register', data)
    .then(response => {
      //ИЗМЕНИТЬ

      dispatch(signupSuccess(response.data.user));
      //Добавляем токен в локал сторедж
      localStorage.setItem('token', JSON.stringify(response.data.user.token));
    })
    .catch(error => signupError(error));
  console.log('sffsf');
};
// export const addComment = (comment, id) => dispatch => {
//     dispatch(addCommentStart());
//     axios
//       .post('https://bloggy-api.herokuapp.com/comments', comment)
//       .then(() => dispatch(getComment(id)))
//       .catch(error => dispatch(addCommentError(error)));
//   };
