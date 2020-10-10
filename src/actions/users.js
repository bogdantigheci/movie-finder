import {
  GET_USERS_SUCCESS,
  GET_USERS_PENDING,
  GET_USERS_ERROR,
} from '../constants/types';
import axios from 'axios';

export const getUsersPending = () => ({
  type: GET_USERS_PENDING,
});
export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  users,
});
export const getUsersError = (err) => ({
  type: GET_USERS_ERROR,
  err,
});

export const getUsers = () => (dispatch) => {
  dispatch(getUsersPending());
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      dispatch(getUsersSuccess(res.data));
    })
    .catch((err) => dispatch(getUsersError(err)));
};
