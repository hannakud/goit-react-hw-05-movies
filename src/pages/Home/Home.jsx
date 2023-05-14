import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        setIsLoading(true);
        const moviesList = await getTrendMovies();
        console.log(moviesList);
        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTrending();
  }, []);

  return <>{isLoading ? <Loader /> : <MoviesList movies={movies} />}</>;
};

export default Home;
