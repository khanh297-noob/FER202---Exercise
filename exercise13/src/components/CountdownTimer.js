import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialValue = 10 }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Dừng nếu chưa bấm bắt đầu hoặc đã về 0
    if (!isActive || timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function: Xóa timer để tránh tràn bộ nhớ
    return () => {
      clearInterval(timerId);
    };
  }, [isActive, timeRemaining]);

  const handleReset = () => {
    setIsActive(false);
    setTimeRemaining(initialValue);
  };

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">2. Countdown Timer</h5>
      <div className="my-auto">
        <h2 className="display-5 fw-bold mb-3 text-info">
          Time Remaining: {timeRemaining}
        </h2>
        {timeRemaining === 0 && <p className="text-danger fw-bold">Time is up!</p>}

        <div className="d-flex justify-content-center gap-2">
          <button 
            className={`btn ${isActive ? 'btn-warning' : 'btn-success'} fw-semibold`}
            onClick={() => setIsActive(!isActive)}
            disabled={timeRemaining === 0}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className="btn btn-secondary fw-semibold" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;