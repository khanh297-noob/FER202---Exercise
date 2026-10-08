import React, { useState } from 'react';

const SnapshotDemo = () => {
  // 1. Khai báo 2 biến state: count (giá trị hiện tại) và snapshot (ảnh chụp lưu lại)
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  // Tăng giá trị count lên 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Chụp lại giá trị count hiện tại lưu vào biến snapshot
  const handleSnapshot = () => {
    setSnapshot(count);
  };

  // Khôi phục giá trị count từ snapshot nếu đã chụp ảnh trước đó
  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 mx-auto" style={{ maxWidth: '520px' }}>
      <h3 className="text-warning fw-bold mb-3">State as a Snapshot Demo</h3>

      <div className="py-3">
        <p className="fs-2 fw-bold mb-2">
          Count: <span className="text-info">{count}</span>
        </p>
        <p className="small text-secondary mb-4">
          Snapshot đang lưu: {snapshot !== null ? <span className="badge bg-warning text-dark fs-6">{snapshot}</span> : <span className="text-muted">Chưa có bản chụp nào</span>}
        </p>

        {/* 3 nút bấm thao tác theo tài liệu */}
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button 
            className="btn btn-primary fw-semibold px-3"
            onClick={handleIncrement}
          >
            <i className="bi bi-plus-circle me-1"></i> Increment
          </button>

          <button 
            className="btn btn-warning text-dark fw-semibold px-3"
            onClick={handleSnapshot}
          >
            <i className="bi bi-camera me-1"></i> Take Snapshot
          </button>

          <button 
            className="btn btn-outline-info fw-semibold px-3"
            onClick={handleRestore}
            disabled={snapshot === null}
          >
            <i className="bi bi-arrow-counterclockwise me-1"></i> Restore Snapshot
          </button>
        </div>
      </div>

      <div className="mt-4 p-3 rounded bg-secondary bg-opacity-25 text-start small text-light border border-secondary">
        <p className="mb-1 text-warning fw-bold"><i className="bi bi-lightbulb me-1"></i> Nguyên lý hoạt động:</p>
        <p className="mb-0">
          Khi nhấn <strong>Take Snapshot</strong>, giá trị hiện tại được đóng băng lưu vào <code>snapshot</code>[cite: 14]. 
        </p>
      </div>
    </div>
  );
};

export default SnapshotDemo;