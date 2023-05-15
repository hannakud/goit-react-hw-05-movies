import css from './MovieCard.module.css';
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
        <h4>Genres</h4>
        <p>{genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
