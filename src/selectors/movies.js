import _ from 'lodash';

export const getTopRatedMovies = (state) => _.get(state, 'movies.results', []);
export const getCurrentPage = (state) => _.get(state, 'movies.page', 1);
