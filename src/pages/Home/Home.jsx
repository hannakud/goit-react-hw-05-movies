import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/Api';
import { toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        setIsLoading(true);
        const moviesList = await getTrendMovies();
        setMovies(moviesList);
      } catch (error) {
        toast.error(' Sorry, there is mistake in server');
      } finally {
        setIsLoading(false);
      }
    };
    loadTrending();
  }, []);

  return <>{isLoading ? <Loader /> : <MoviesList movies={movies} />}</>;
};

export default Home;
