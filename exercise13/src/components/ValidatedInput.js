import React, { useState, useEffect } from 'react';

const ValidatedInput = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const errorMessage = 'Độ dài tối thiểu phải từ 5 ký tự trở lên!';

  // Hàm điều kiện kiểm tra
  const validationFunction = (text) => text.trim().length >= 5 || text.trim().length === 0;

  useEffect(() => {
    // Chạy kiểm tra mỗi khi biến value thay đổi
    setIsValid(validationFunction(value));
  }, [value]);

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">4. Form Input Validation</h5>
      <div className="my-auto" style={{ maxWidth: '320px', margin: '0 auto' }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập tối thiểu 5 ký tự..."
          className={`form-control ${!isValid ? 'is-invalid border-danger' : ''}`}
        />
        {!isValid && (
          <p className="text-danger small mt-2 fw-semibold text-start mb-0">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ValidatedInput;