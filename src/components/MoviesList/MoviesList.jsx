import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import css from './MoviesList.module.css';

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

export default MoviesList;
