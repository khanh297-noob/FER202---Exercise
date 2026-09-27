import React, { useState } from 'react';

const SearchFilter = () => {
  const initialItems = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Strawberry'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = initialItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card shadow-sm p-4 bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3 text-center">6. Search Filter</h5>
      <div className="d-flex flex-column align-items-center">
        <input 
          type="text" 
          className="form-control mb-3"
          style={{ maxWidth: '300px' }}
          placeholder="Search fruit name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul className="list-group w-100" style={{ maxWidth: '300px' }}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="list-group-item list-group-item-dark">
                {item}
              </li>
            ))
          ) : (
            <li className="list-group-item list-group-item-danger text-center">
              No results found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;