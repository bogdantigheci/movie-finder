import { GET_USERS_SUCCESS, GET_USERS_ERROR } from '../constants/types';

const initialState = [];

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, ...action.users };
    case GET_USERS_ERROR:
      return { ...state, ...action.err };
    default:
      return state;
  }
};
