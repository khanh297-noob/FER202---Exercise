import React, { useReducer } from 'react';

// 1. Khởi tạo state ban đầu
const initialState = { count: 0 };

// 2. Reducer function xử lý các hành động qua switch-case
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">Exercise 1: Simple Counter (useReducer)</h5>
      
      <div className="my-auto py-3">
        <h1 className="display-4 fw-bold text-info mb-4">
          Count: {state.count}
        </h1>

        <div className="d-flex justify-content-center gap-3">
          <button 
            className="btn btn-danger px-4 fs-4 fw-bold"
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            -
          </button>
          
          <button 
            className="btn btn-secondary px-4 fw-semibold"
            onClick={() => dispatch({ type: 'RESET' })}
          >
            Reset
          </button>

          <button 
            className="btn btn-success px-4 fs-4 fw-bold"
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterReducer;