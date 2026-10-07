import React from 'react';
import EventHandlingDemo from './components/EventHandlingDemo';

const App = () => {
  return (
    <div className="min-vh-100 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <EventHandlingDemo />
      </div>
    </div>
  );
};

export default App;