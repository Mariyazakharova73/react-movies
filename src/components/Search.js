import React from 'react';

function Search({ searchMovies }) {
  //state={movies:[]}
  const [search, setSearch] = React.useState('');

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  function handleKey(evt) {
    if (evt.key === 'Enter') {
      searchMovies(search);
    }
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input value={search} onChange={handleChange} placeholder="search" type="search" className="validate" 
        onKeyDown={handleKey}/>
      </div>
    </div>
  );
}

export default Search;
