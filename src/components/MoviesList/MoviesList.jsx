import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.MoviesList}>
      {movies.map(({ id, title, overview, poster }) => (
        <MoviesListItem
          key={id}
          id={id}
          title={title}
          overview={overview}
          poster={poster}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
