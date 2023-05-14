import axios from 'axios';

const URL = `https://api.themoviedb.org/3`;
const API_KEY = 'e0b2738922ecba49fdf80e5e8d9f9891';

export const api = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendMovies = async () => {
  const response = await api.get(`/trending/movie/day`);
  return response.data.results.map(({ id, title, overview, poster_path }) => ({
    id,
    title,
    overview,
    poster: poster_path,
  }));
};

export const getMoviesByName = query => {
  const response = api.get(`/search/movie?query=${query}`);
  return response;
};

export const getMoviesDetails = movie_id => {
  const response = api.get(`/movie/${movie_id}?`);
  return response;
};

export const getCast = movie_id => {
  const response = api.get(`/movie/${movie_id}/credits?`);
  return response;
};

export const getReviews = movie_id => {
  const response = api.get(`/movie/${movie_id}/reviews?`);
  return response;
};
