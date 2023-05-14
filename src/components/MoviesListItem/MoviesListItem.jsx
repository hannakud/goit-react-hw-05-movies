import { Link } from 'react-router-dom';

const MoviesListItem = ({ id, title, overview, poster }) => {
  return (
    <li>
      <img src={'https://image.tmdb.org/t/p/w154/' + poster} alt={title} />
      <h4>{title}</h4>
      <p>{overview}</p>
      <Link to={`/movies/${id}`}>Details >></Link>
    </li>
  );
};

export default MoviesListItem;
