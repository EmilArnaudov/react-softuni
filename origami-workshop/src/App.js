import './App.css';
import Navigation from './components/navigation/Navigation';
import SearchMovie from './components/search-movie/SearchMovie';
import Gallery from './components/gallery/Gallery'
import searchMovie from './services/movieService';

import {useState} from 'react';

function App() {
  let [movies, setMovies] = useState('')


  async function searchMovieHandler(e) {
    e.preventDefault();
    let searchText = e.target.querySelector('div input').value;

    let result = await searchMovie(searchText);
    setMovies(result.Search);
  }

  return (
    <>
      <Navigation></Navigation>
      <SearchMovie searchMovieHandler={searchMovieHandler} ></SearchMovie>
      {movies !== '' 
        ? <Gallery movies={movies}></Gallery>
        : <h1>Search movies..</h1>}
    </>
  );
}

export default App;
