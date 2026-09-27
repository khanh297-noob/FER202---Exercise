import React from 'react';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';

function App() {
  return (
    <div className="bg-secondary bg-opacity-25 min-vh-100 py-5">
      <div className="container">
        {/* Tiêu đề trang */}
        <div className="text-center mb-5">
          <h1 className="fw-black text-dark text-uppercase">Exercise 13: React Hook (useEffect)</h1>
          
        </div>

        {/* Lưới bài tập */}
        <div className="row g-4">
          <div className="col-lg-6 col-12">
            <UserPosts />
          </div>
          <div className="col-lg-6 col-12">
            <CountdownTimer initialValue={15} />
          </div>
          <div className="col-lg-6 col-12">
            <WindowSize />
          </div>
          <div className="col-lg-6 col-12">
            <ValidatedInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;