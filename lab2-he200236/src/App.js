import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { movies as initialMovies } from './datas/movies';

const MainContent = () => {
  const { theme } = useTheme();

  const [moviesList] = useState(initialMovies);
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorite_movies', []);
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);


  const handleToggleFavorite = (id) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  const finalMovies = useMemo(() => {
    return moviesList
      .filter((m) => {
        const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = genre === 'All' || m.genre.toLowerCase() === genre.toLowerCase();
        return matchesSearch && matchesGenre;
      })
      .sort((a, b) => {
        if (sort === 'high-low') return b.rating - a.rating;
        if (sort === 'low-high') return a.rating - b.rating;
        return 0;
      });
  }, [moviesList, search, genre, sort]);

  return (
    <div
      className={`min-vh-100 py-4 transition-all ${
        theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'
      }`}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div
          className={`card p-4 shadow border rounded-4 ${
            theme === 'dark'
              ? 'bg-secondary bg-opacity-25 text-white border-secondary'
              : 'bg-white text-dark border-light-subtle'
          }`}
        >

          <Header favoriteCount={favoriteIds.length} />


          <div className="mb-3">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <GenreFilter
            genre={genre}
            setGenre={setGenre}
            sort={sort}
            setSort={setSort}
          />

          <MovieList
            movies={finalMovies}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onSelectMovie={(movie) => setSelectedMovie(movie)}
          />

          <MovieDetail
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;











