import React from 'react';
import { connect } from 'react-redux';
import { getTopRatedMovies, getCurrentPage } from '../../selectors/movies';
import { geTopRatedMovies } from '../../actions/movies';
import { movieGenres } from '../../utils/movieGenres';

const Content = (props) => {
  const [pageIndex, setPageIndex] = React.useState(props.currentPage);

  React.useEffect(() => {
    props.geTopRatedMovies(pageIndex);
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
    <div
      style={{
        display: 'flex',
        height: '100%',
        textAlign: 'center',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.movies.map((movie, i) => (
        <div
          className="card m-3"
          style={{ width: '18rem', height: '18rem' }}
          key={i}
        >
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.name}
            style={{ height: '100px', width: '100px' }}
          />
          <div className="card-title">
            <p>{movie.name}</p>
            <p>Original name: {movie.original_name}</p>
            <p>
              Genres: {getMovieGenre(movieGenres, movie.genre_ids).join(', ')}
            </p>
            <p>Air date: {movie.first_air_date}</p>
          </div>
          <div>Popularity: {movie.popularity}</div>
          <div>
            <p>Vote count: {movie.vote_count}</p>
            <p>Vote average:{movie.vote_average}</p>
          </div>
        </div>
      ))}
      <button onClick={changePage}>Next page</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: getTopRatedMovies(state),
  currentPage: getCurrentPage(),
});
const mapDispatchToProps = (dispatch) => ({
  geTopRatedMovies: (currentPage) => dispatch(geTopRatedMovies(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
