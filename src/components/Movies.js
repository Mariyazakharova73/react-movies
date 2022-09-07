import Movie from '../components/Movie.js';

function Movies(props) {
  //назначили занчение по умолчанию. Если придет undefinend, мы получим пустой массив
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export default Movies;
