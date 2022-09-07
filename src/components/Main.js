import React from 'react';
import Movies from './Movies';
import Preloader from './Preloader';
import Search from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;
function Main() {
  //state={movies:[]}
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((res) => setMovies(res.Search))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function searchMovies(str, type = 'all') {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((res) => setMovies(res.Search))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main className="content container">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export default Main;
