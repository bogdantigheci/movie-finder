import React from 'react';
import { connect } from 'react-redux';
import { getTopRatedMovies, getCurrentPage } from '../../selectors/movies';
import { geTopRatedMovies } from '../../actions/movies';

const Content = (props) => {
  const [pageIndex, setPageIndex] = React.useState(props.currentPage);

  React.useEffect(() => {
    props.geTopRatedMovies(pageIndex);
  }, [pageIndex]);

  const changePage = () => {
    setPageIndex(() => pageIndex + 1);
  };

  return (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      {props.movies.map((movie, i) => (
        <div key={i}>{movie.name}</div>
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
