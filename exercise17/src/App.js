import React from 'react';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';

function App() {
  return (
    <div className="min-vh-100 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <RenderAndCommitDemo />
      </div>
    </div>
  );
}

export default App;