import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

const MovieCard = ({
  title,
  releaseYear,
  overview,
  poster,
  genres,
  rating,
}) => {
  return (
    <div className={css.wrapper}>
      <img className={css.poster} src={poster} alt={title} />
      <div>
        <h2>
          {title} ({releaseYear})
        </h2>
        <div>User score: {(rating * 10).toFixed(0)}%</div>
        <h4>Overview</h4>
        <p>{overview}</p>
        {genres.length && (
          <div>
            <h4>Genres</h4>
            <p>{genres.join('  ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};
export default MovieCard;
