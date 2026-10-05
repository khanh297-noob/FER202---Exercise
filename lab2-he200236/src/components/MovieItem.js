import React from 'react';

const MovieItem = ({ movie, isFavorite, onToggleFavorite, onSelectMovie }) => {
  return (
    <div className="card h-100 shadow-sm border border-secondary border-opacity-25 bg-transparent">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-primary">{movie.title}</h5>
        <div className="mb-2 small">
          <span className="badge bg-secondary me-2">{movie.genre}</span>
          <span>{movie.year}</span>
        </div>
        <p className="card-text text-warning fw-bold mb-3">
          ⭐ {movie.rating}
        </p>

        <div className="mt-auto d-flex gap-2">
          
          <button
            onClick={() => onToggleFavorite(movie.id)}
            className={`btn btn-sm ${isFavorite ? 'btn-warning text-dark' : 'btn-outline-warning'} fw-semibold flex-fill d-flex align-items-center justify-content-center gap-1`}
          >
            <i className={`bi ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}></i>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>

          <button
            onClick={() => onSelectMovie(movie)}
            className="btn btn-sm btn-outline-info fw-semibold flex-fill"
          >
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;