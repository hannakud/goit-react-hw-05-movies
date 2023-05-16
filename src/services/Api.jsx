import axios from 'axios';

const URL = `https://api.themoviedb.org/3`;
const API_KEY = 'e0b2738922ecba49fdf80e5e8d9f9891';

export const api = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
  },
});

const POSTER_BASE_URL_W154 = 'https://image.tmdb.org/t/p/w154/';
const POSTER_BASE_URL_W300 = 'https://image.tmdb.org/t/p/w300/';
const NO_PHOTO =
  'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';

export const getTrendMovies = async () => {
  const response = await api.get(`/trending/movie/day`);
  return response.data.results.map(({ id, title, overview, poster_path }) => ({
    id,
    title,
    overview,
    poster: poster_path ? POSTER_BASE_URL_W154 + poster_path : '',
  }));
};

export const getMoviesByName = async query => {
  const response = await api.get(`/search/movie?query=${query}`);
  return response.data.results.map(({ id, title, overview, poster_path }) => ({
    id,
    title,
    overview,
    poster: poster_path ? POSTER_BASE_URL_W154 + poster_path : NO_PHOTO,
  }));
};

export const getMoviesDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}?`);
  const {
    id,
    genres,
    title,
    release_date,
    overview,
    poster_path,
    vote_average,
  } = response.data;

  console.log(response.data);
  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  return {
    id,
    title,
    releaseYear,
    overview,
    poster: poster_path ? POSTER_BASE_URL_W300 + poster_path : NO_PHOTO,
    genres: genres.map(({ name }) => name),
    rating: vote_average,
  };
};

export const getCast = async movieid => {
  const response = await api.get(`/movie/${movieid}/credits?`);

  return response.data.cast.map(({ id, name, character, profile_path }) => ({
    id,
    character,
    profile: profile_path ? POSTER_BASE_URL_W154 + profile_path : NO_PHOTO,
    name,
  }));
};

export const getReviews = async movieid => {
  const response = await api.get(`/movie/${movieid}/reviews?`);
  return response.data.results.map(({ id, content, author }) => ({
    id,
    content,
    author,
  }));
};
