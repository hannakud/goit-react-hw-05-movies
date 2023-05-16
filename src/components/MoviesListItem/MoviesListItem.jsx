import { Link } from 'react-router-dom';
import css from './MoviesListItem.module.css';
import PropTypes from 'prop-types';

const MoviesListItem = ({ id, title, overview, poster }) => {
  return (
    <li className={css.MoviesListItem}>
      <img className={css.poster} src={poster} alt={title} />
      <h4>{title}</h4>
      <p className={css.text}>{overview}</p>
      <div className={css.LinkWrapper}>
        <Link to={`/movies/${id}`}>Show details</Link>
      </div>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MoviesListItem;
