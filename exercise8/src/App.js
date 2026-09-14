import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    fromCity: 'Hà Nội',
    toCity: 'Hà Nội',
    isOneWay: false,
    isReturn: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đặt vé thành công cho: ${formData.fullName || 'Khách hàng'}`);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '540px' }}>
      {/* 1. Alert thông báo có nút đóng */}
      <div className="alert alert-warning alert-dismissible fade show py-2" role="alert">
        <button type="button" className="btn-close py-2" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      {/* 2. Tiêu đề chính */}
      <h1 className="fw-bold mb-4" style={{ fontSize: '32px' }}>
        Form đặt vé máy bay
      </h1>

      <form onSubmit={handleSubmit}>
        {/* 3. Họ tên (Input group prepent icon & append vnđ) */}
        <div className="mb-3">
          <label className="form-label mb-1">Họ tên</label>
          <div className="input-group">
            <span className="input-group-text bg-light text-muted">
              <i className="bi bi-person"></i>
            </span>
            <input 
              type="text" 
              className="form-control" 
              name="fullName"
              placeholder="Họ tên" 
              value={formData.fullName}
              onChange={handleChange}
            />
            <span className="input-group-text bg-light text-muted">
              vnđ
            </span>
          </div>
          <div className="form-text text-muted">
            Phải nhập 5 ký tự, in hoa....
          </div>
        </div>

        {/* 4. Địa chỉ */}
        <div className="mb-3">
          <label className="form-label mb-1">Địa chỉ</label>
          <input 
            type="text" 
            className="form-control" 
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="form-text text-muted">
            Phải nhập 5 ký tự, in hoa....
          </div>
        </div>

        {/* 5. Đi từ - Đến (Lưới 2 cột đều nhau) */}
        <div className="row g-3 mb-3">
          <div className="col-6">
            <label className="form-label mb-1">Đi từ</label>
            <select 
              className="form-select" 
              name="fromCity" 
              value={formData.fromCity} 
              onChange={handleChange}
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            </select>
          </div>

          <div className="col-6">
            <label className="form-label mb-1">Đến</label>
            <select 
              className="form-select" 
              name="toCity" 
              value={formData.toCity} 
              onChange={handleChange}
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            </select>
          </div>
        </div>

        {/* 6. Chọn chiều đi (Khứ hồi) */}
        <div className="mb-4">
          <label className="form-label d-block mb-1">Chọn chiều đi (Khứ hồi)</label>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="checkDi" 
              name="isOneWay" 
              checked={formData.isOneWay} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="checkDi">Đi</label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="checkVe" 
              name="isReturn" 
              checked={formData.isReturn} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="checkVe">Về</label>
          </div>
        </div>

        {/* 7. Nút Submit Đặt vé */}
        <button type="submit" className="btn btn-primary w-100 py-2 fs-5">
          Đặt vé
        </button>
      </form>
    </div>
  );
}

export default App;