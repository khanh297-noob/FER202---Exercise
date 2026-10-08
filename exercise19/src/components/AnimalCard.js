import React from 'react';
import PropTypes from 'prop-types';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  image,
  additional,
  showAdditional
}) {
  return (
    <div className="card h-100 shadow border-0 rounded-0 overflow-hidden" style={{ backgroundColor: '#f5a623' }}>
      {/* Hình ảnh con vật */}
      <img
        src={image}
        alt={name}
        className="card-img-top rounded-0"
        style={{ height: '240px', objectFit: 'cover' }}
      />

      <div className="card-body p-3 text-start">
        {/* Tên con vật màu đỏ nổi bật */}
        <h3 className="card-title fw-bold text-danger mb-3">{name}</h3>

        {/* Khung thông tin màu trắng */}
        <div className="bg-white rounded p-2 mb-3 shadow-sm">
          <p className="mb-2 border-bottom pb-1 small">
            <strong>Scientific Name:</strong> {scientificName}
          </p>
          <p className="mb-2 border-bottom pb-1 small">
            <strong>{size} kg</strong>
          </p>
          <p className="mb-0 small text-capitalize">
            {diet.join(', ')}.
          </p>
        </div>

        {/* Nút bấm More Info */}
        <div className="text-center">
          <button
            className="btn btn-danger px-4 fw-semibold shadow-sm"
            onClick={() => showAdditional(additional)}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

// 1. Kiểm tra kiểu dữ liệu của Props bằng PropTypes
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  showAdditional: PropTypes.func.isRequired,
  // additional là object chứa 2 trường tùy chọn link và notes
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  })
};

// 2. Thiết lập giá trị mặc định phòng ngừa lỗi undefined
AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
    link: 'No Additional Information'
  }
};