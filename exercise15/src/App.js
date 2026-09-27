import React from 'react';
import CounterReducer from './components/CounterReducer';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div className="bg-secondary bg-opacity-25 min-vh-100 py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-black text-dark text-uppercase">
            Exercise 15: React Hook (useReducer)
          </h1>

        </div>

        {/* Lưới bài tập 2 cột */}
        <div className="row g-4">
          <div className="col-lg-5 col-12">
            <CounterReducer />
          </div>
          <div className="col-lg-7 col-12">
            <QuestionBank />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;