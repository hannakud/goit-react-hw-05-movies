import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesDetails } from 'services/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(false);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await getMoviesDetails(movieId);
        console.log(movieDetails);
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

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
