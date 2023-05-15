import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByName } from '../../services/Api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('search') || '';

  useEffect(() => {
    if (query) {
      const searchMovies = async search => {
        try {
          setIsLoading(true);
          const moviesList = await getMoviesByName(search);
          setMovies(moviesList);
          if (!moviesList.length) {
            toast.error(`No moviews found by search: "${query}"`);
          }
        } catch (error) {
          toast.error('Ooops, something went wrong :(');
        } finally {
          setIsLoading(false);
        }
      };
      searchMovies(query);
    }
  }, [query]);

  return (
    <div>
      <SearchMovies />
      <>{isLoading ? <Loader /> : <MoviesList movies={movies} />}</>
    </div>
  );
};

export default Movies;
