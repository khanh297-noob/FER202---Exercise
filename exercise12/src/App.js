import React from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragAndDropList from './components/DragAndDropList';

function App() {
  return (
    <div className="bg-secondary bg-opacity-25 min-vh-100 py-5">
      <div className="container">
        {/* Header Tiêu đề */}
        <div className="text-center mb-5">
          <h1 className="fw-black text-dark text-uppercase">Exercise 12: React Hook (useState)</h1>
          
        </div>

        {/* Lưới bài tập */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <Counter />
          </div>
          <div className="col-lg-4 col-md-6">
            <ControlledInput />
          </div>
          <div className="col-lg-4 col-md-6">
            <ToggleVisibility />
          </div>

          <div className="col-lg-6 col-12">
            <TodoList />
          </div>
          <div className="col-lg-6 col-12">
            <ColorSwitcher />
          </div>

          <div className="col-lg-6 col-12">
            <SearchFilter />
          </div>
          <div className="col-lg-6 col-12">
            <DragAndDropList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;