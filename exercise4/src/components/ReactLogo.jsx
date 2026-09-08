import React from 'react';

const ReactLogo = () => {
  return (
    <div style={{ width: '260px', textAlign: 'center', margin: '30px 0' }}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        style={{ width: '180px' }} 
      />
      <div style={{ borderTop: '2px solid #0288d1', marginTop: '15px', paddingTop: '10px' }}>
        <p style={{ fontStyle: 'italic', color: '#0288d1', fontWeight: 'bold', margin: 0 }}>
          This is the React logo!
        </p>
        <p style={{ fontStyle: 'italic', fontSize: '12px', color: '#777', margin: '4px 0' }}>
          (I don't know why it is here either)
        </p>
      </div>
      <p style={{ marginTop: '15px', fontSize: '15px' }}>
        The library for web and native user interfaces
      </p>
    </div>
  );
};

export default ReactLogo;