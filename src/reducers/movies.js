import {
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_ERROR,
} from '../constants/types';

const initialState = [];

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_RATED_MOVIES_SUCCESS:
      return { ...state, ...action.movies };
    case GET_TOP_RATED_MOVIES_ERROR:
      return { ...state, ...action.err };
    default:
      return state;
  }
};
