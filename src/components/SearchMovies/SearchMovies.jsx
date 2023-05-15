import { toast } from 'react-toastify';
import css from './SearchMovie.module.css';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const [search, setSearch] = useState(() => query);

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;
    if (!query) {
      toast.error('Please enter something');
      return;
    }

    setSearchParams({ search: query });
  };

  return (
    <div className={css.wrapper}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchInput}
          name="query"
          type="text"
          placeholder="Search movies"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
