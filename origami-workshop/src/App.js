import './App.css';
import Navigation from './components/navigation/Navigation';
import SearchMovie from './components/search-movie/SearchMovie';
import Gallery from './components/gallery/Gallery'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <SearchMovie></SearchMovie>
      <Gallery></Gallery>
    </>
  );
}

export default App;
