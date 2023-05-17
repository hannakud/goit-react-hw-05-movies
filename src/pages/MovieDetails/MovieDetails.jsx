import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesDetails } from 'services/Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const loadTrending = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await getMoviesDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        toast.error(' Sorry, there is mistake in server');
      } finally {
        setIsLoading(false);
      }
    };
    loadTrending();
  }, [movieId]);

  const { title, releaseYear, overview, poster, genres, rating } = movie;

  return (
    <div>
      <Link to={backLinkHref.current}>GO BACK</Link>
      {movie && (
        <MovieCard
          title={title}
          releaseYear={releaseYear}
          poster={poster}
          genres={genres}
          overview={overview}
          rating={rating}
        />
      )}

      <ul className={css.list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={isLoading && <Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
