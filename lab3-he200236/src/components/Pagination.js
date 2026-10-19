import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 0) return null;

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
      <button
        className="btn btn-outline-primary btn-sm fw-semibold px-3"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <span className="fw-bold">
        Page: {currentPage}/{totalPages}
      </span>

      <button
        className="btn btn-outline-primary btn-sm fw-semibold px-3"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;