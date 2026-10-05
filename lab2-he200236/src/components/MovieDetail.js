import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white border border-secondary">
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold text-warning">{movie.title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p><strong>Title:</strong> {movie.title}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Duration:</strong> {movie.duration} minutes</p>
            <p><strong>Description:</strong> {movie.description}</p>
            
          </div>
          <div className="modal-footer border-secondary">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;