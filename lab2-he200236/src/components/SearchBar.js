import React, { useEffect, useRef } from 'react';

const SearchBar = ({ search, setSearch }) => {
  const inputRef = useRef(null);


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      className="form-control"
      placeholder="Tìm tên phim..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;