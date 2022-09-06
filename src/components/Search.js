import React from 'react';

function Search({ searchMovies }) {
  //state={movies:[]}
  const [search, setSearch] = React.useState('');
  const [type, setType] = React.useState('all');

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  function handleKey(evt) {
    if (evt.key === 'Enter') {
      searchMovies(search, type);
    }
  }

  function handleFilter(evt) {
    setType(evt.target.dataset.type);
    searchMovies(search, type);
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          value={search}
          onChange={handleChange}
          placeholder="search"
          type="search"
          className="validate"
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => {
            searchMovies(search, type);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  );
}

export default Search;
