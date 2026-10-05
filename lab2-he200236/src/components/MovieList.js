import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, favoriteIds, onToggleFavorite, onSelectMovie }) => {
  return (
    <div>
      
      <div className="p-2 mb-3 rounded bg-secondary bg-opacity-10 fw-semibold text-center">
        Đang hiển thị: <span className="text-primary">{movies.length}</span>
      </div>

      {movies.length > 0 ? (
        <div className="row g-3">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 col-sm-6 col-12">
              <MovieItem
                movie={movie}
                isFavorite={favoriteIds.includes(movie.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectMovie={onSelectMovie}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted py-4">Không tìm thấy bộ phim nào phù hợp!</p>
      )}
    </div>
  );
};

export default MovieList;