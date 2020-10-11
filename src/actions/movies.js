import {
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_PENDING,
  GET_TOP_RATED_MOVIES_ERROR,
  GET_MOVIE_GENRES_PENDING,
  GET_MOVIE_GENRES_SUCCESS,
  GET_MOVIE_GENRES_ERROR,
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
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${currentPage}`
    )
    .then((res) => {
      dispatch(getTopRatedMoviesSuccess(res.data));
    })
    .catch((err) => dispatch(getTopRatedMoviesError(err)));
};

export const getMovieGenresPending = () => ({
  type: GET_MOVIE_GENRES_PENDING,
});
export const getMovieGenresSuccess = (genres) => ({
  type: GET_MOVIE_GENRES_SUCCESS,
  genres,
});
export const getMovieGenresError = (err) => ({
  type: GET_MOVIE_GENRES_ERROR,
  err,
});

export const getMovieGenres = () => (dispatch) => {
  dispatch(getMovieGenresPending());
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    )
    .then((res) => {
      dispatch(getMovieGenresSuccess(res.data));
    })
    .catch((err) => dispatch(getMovieGenresError(err)));
};
