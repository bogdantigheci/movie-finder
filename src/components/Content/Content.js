import React from 'react';
import { connect } from 'react-redux';
import {
  getTopRatedMovies,
  getCurrentPage,
  getMovieGenres,
} from '../../selectors/movies';
import { fetchTopRatedMovies, fetchMovieGenres } from '../../actions/movies';
import { movieGenres } from '../../utils/movieGenres';

const Content = (props) => {
  const [pageIndex, setPageIndex] = React.useState(props.currentPage);

  React.useEffect(() => {
    props.fetchMovieGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    props.fetchTopRatedMovies(pageIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  const changePage = () => {
    setPageIndex(() => pageIndex + 1);
  };

  const getMovieGenre = (genres, genreIds) => {
    let resultedGenres = [];
    genreIds.forEach((genreId) => {
      genres.filter((genre) =>
        genre.id === genreId
          ? (resultedGenres = [...resultedGenres, genre.name])
          : resultedGenres
      );
    });
    return resultedGenres;
  };
  return (
    <>
      <div className="d-flex text-center flex-wrap justify-content-center align-items-center">
        {props.movies.map((movie, i) => (
          <div className="card m-3" key={i}>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="card-img-top mt-3 ml-3 mr-3 rounded shadow"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.name}
                style={{ height: '100%', width: '150px' }}
              />
              <div className="mt-3 mr-3 movie-desc">
                <div className="card-title">
                  <p>{movie.name}</p>
                  <p>Original name: {movie.original_name}</p>
                  <p>
                    Genres:{' '}
                    {getMovieGenre(movieGenres, movie.genre_ids).join(', ')}
                  </p>
                  <p>Air date: {movie.first_air_date}</p>
                </div>
                <p>Popularity: {movie.popularity}</p>
                <p>Vote count: {movie.vote_count}</p>
                <p>Vote average:{movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
        <button onClick={changePage}>Next page</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: getTopRatedMovies(state),
  currentPage: getCurrentPage(state),
  movieGenres: getMovieGenres(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchTopRatedMovies: (currentPage) =>
    dispatch(fetchTopRatedMovies(currentPage)),
  fetchMovieGenres: () => dispatch(fetchMovieGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
