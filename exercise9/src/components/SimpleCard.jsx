import React from 'react';

// Component con 1: Image nhận prop "url"
export const Image = ({ url }) => {
  return (
    <div style={{
      width: '180px',
      backgroundColor: '#fef3c7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRight: '2px solid #3b82f6',
      padding: '10px'
    }}>
      {url ? (
        <img src={url} alt="Card visual" style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }} />
      ) : (
        <span style={{ fontSize: '32px', color: '#d97706', fontWeight: 'bold' }}>IMG</span>
      )}
    </div>
  );
};

// Component con 2: Title nhận prop "text"
export const Title = ({ text }) => {
  return (
    <div style={{
      borderBottom: '2px solid #ea580c',
      padding: '8px 16px'
    }}>
      <h3 style={{ color: '#ea580c', margin: 0, fontWeight: '500' }}>{text}</h3>
    </div>
  );
};

// Component con 3: Description nhận prop "text"
export const Description = ({ text }) => {
  return (
    <div style={{ padding: '12px 16px' }}>
      <p style={{ color: '#6b7280', margin: 0, fontSize: '18px' }}>{text}</p>
    </div>
  );
};

// Wrapper Component: SimpleCard nhận prop "item"
export const SimpleCard = ({ item }) => {
  return (
    <div style={{
      display: 'flex',
      border: '3px solid #3b82f6',
      backgroundColor: '#ffffff',
      maxWidth: '650px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <Image url={item.imageUrl} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
};

export default SimpleCard;