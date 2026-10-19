import React from 'react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { label: 'All Category', value: '' },
    { label: 'Điện thoại', value: 'Điện thoại' },
    { label: 'Laptop', value: 'Laptop' },
    { label: 'Máy tính bảng', value: 'Máy tính bảng' },
    { label: 'Phụ kiện', value: 'Phụ kiện' }
  ];

  return (
    <div className="d-flex align-items-center gap-2 mb-3">
      <label className="fw-semibold text-nowrap mb-0">Category:</label>
      <select
        className="form-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;