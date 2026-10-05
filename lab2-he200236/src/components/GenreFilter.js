import React from 'react';

const GenreFilter = ({ genre, setGenre, sort, setSort }) => {
  const genres = ['All', 'Action', 'Animation', 'Comedy', 'Drama', 'Romance', 'Sci-Fi'];

  return (
    <div className="row g-2 mb-3">
      <div className="col-md-6 col-12">
        <select
          className="form-select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              Tất cả thể loại: {g}
            </option>
          ))}
        </select>
      </div>

      {}
      <div className="col-md-6 col-12">
        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sắp xếp: Mặc định</option>
          <option value="high-low">Rating: Cao - Thấp</option>
          <option value="low-high">Rating: Thấp - Cao</option>
        </select>
      </div>
    </div>
  );
};

export default GenreFilter;