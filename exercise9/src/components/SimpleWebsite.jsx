import React from 'react';

const SimpleWebsite = () => {
  return (
    <div className="border rounded overflow-hidden shadow-sm my-4">
      {/* Header màu cam */}
      <div style={{ backgroundColor: '#e67e22' }} className="p-3 text-center">
        <div className="bg-white d-inline-block p-2 rounded mb-2">
          <span className="fw-bold fs-4 text-primary">FPT <span className="text-secondary">Education</span></span>
        </div>
        <h3 className="text-white fw-bold mb-2">FPT UNIVERSITY</h3>
        <div className="text-white">
          <span className="mx-2 cursor-pointer">Home</span>
          <span className="mx-2 cursor-pointer">About</span>
          <span className="mx-2 cursor-pointer">Contact</span>
        </div>
      </div>

      {/* Nội dung About & Contact */}
      <div className="p-5 text-center bg-white">
        <h3 className="fw-bold mb-2">About</h3>
        <p className="text-muted mb-4">This is the about section of the website.</p>

        <h3 className="fw-bold mb-2">Contact</h3>
        <p className="text-muted mb-0">For any inquiries, please contact us at example@example.com.</p>
      </div>

      {/* Footer màu vàng nhạt */}
      <div style={{ backgroundColor: '#f5cba7' }} className="text-center py-3 text-dark small">
        &copy; 2023 Website. All rights reserved.
      </div>
    </div>
  );
};

export default SimpleWebsite;