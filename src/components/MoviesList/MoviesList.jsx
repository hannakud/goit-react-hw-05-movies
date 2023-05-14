import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
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
