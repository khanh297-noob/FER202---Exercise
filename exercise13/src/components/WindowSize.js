import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Gắn sự kiện khi mount
    window.addEventListener('resize', handleResize);

    // Gỡ sự kiện khi unmount (cleanup)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Mảng rỗng [] nghĩa là chỉ chạy một lần khi component mount

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">3. Window Resize Listener</h5>
      <div className="my-auto">
        <p className="text-secondary small mb-2">Thử co giãn kích thước cửa sổ trình duyệt để thấy số thay đổi:</p>
        <p className="fs-4 fw-bold text-success mb-0">
          Window size: {windowSize.width} x {windowSize.height}
        </p>
      </div>
    </div>
  );
};

export default WindowSize;