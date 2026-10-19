import React, { useState, useEffect } from 'react';

const SearchBar = ({ initialKeyword, onSearch }) => {
  const [input, setInput] = useState(initialKeyword || '');

  useEffect(() => {
    setInput(initialKeyword || '');
  }, [initialKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search Product by Name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary fw-semibold px-4">
        Search
      </button>
    </form>
  );
};

export default SearchBar;