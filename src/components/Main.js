import React from 'react';
import Movies from './Movies';
import Preloader from './Preloader';
import Search from './Search';

function Main() {
  //state={movies:[]}
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=3cf1dd28&s=matrix')
      .then((response) => response.json())
      .then((res) => setMovies(res.Search));
  }, []);

  function searchMovies(str, type = 'all') {
    fetch(
      `http://www.omdbapi.com/?apikey=3cf1dd28&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((res) => setMovies(res.Search));
  }

  return (
    <main className="content container">
      <Search searchMovies={searchMovies} />
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
}

export default Main;
