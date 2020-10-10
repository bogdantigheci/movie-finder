import {
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_PENDING,
  GET_TOP_RATED_MOVIES_ERROR,
} from '../constants/types';
import axios from 'axios';

export const getTopRatedMoviesPending = () => ({
  type: GET_TOP_RATED_MOVIES_PENDING,
});
export const getTopRatedMoviesSuccess = (movies) => ({
  type: GET_TOP_RATED_MOVIES_SUCCESS,
  movies,
});
export const getTopRatedMoviesError = (err) => ({
  type: GET_TOP_RATED_MOVIES_ERROR,
  err,
});

export const geTopRatedMovies = (currentPage) => (dispatch) => {
  dispatch(getTopRatedMoviesPending());
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=797c2e948e8daf30ff548835a94a9b75&language=en-US&page=${currentPage}`
    )
    .then((res) => {
      dispatch(getTopRatedMoviesSuccess(res.data));
    })
    .catch((err) => dispatch(getTopRatedMoviesError(err)));
};
