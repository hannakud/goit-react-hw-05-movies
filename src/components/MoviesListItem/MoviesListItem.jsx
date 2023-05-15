import { Link } from 'react-router-dom';
import css from './MoviesListItem.module.css';
const MoviesListItem = ({ id, title, overview, poster }) => {
  return (
    <li className={css.MoviesListItem}>
      <img className={css.poster} src={poster} alt={title} />
      <h4>{title}</h4>
      <p>{overview}</p>
      <Link to={`/movies/${id}`}>Show details</Link>
    </li>
  );
};

export default MoviesListItem;
