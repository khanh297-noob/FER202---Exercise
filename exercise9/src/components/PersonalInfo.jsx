import React from 'react';

export const HelloWorld = () => {
  return <h4 className="text-primary">Hello, World!</h4>;
};

export const PersonalInfo = ({ name, bio }) => {
  return (
    <div className="card p-3 mb-4 shadow-sm border-0 bg-light">
      <h3 className="fw-bold">{name}</h3>
      <p className="text-muted mb-0">{bio}</p>
    </div>
  );
};