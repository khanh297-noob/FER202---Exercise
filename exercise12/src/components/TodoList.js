import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState(['Học lập trình .NET', 'Học lập trình Java']);
  const [task, setTask] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodos([...todos, task.trim()]);
      setTask('');
    }
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="card shadow-sm p-4 bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3 text-center">4. Todo List</h5>
      <div className="row g-4 align-items-center">
        {/* Form thêm task */}
        <div className="col-md-6">
          <form onSubmit={handleAdd} className="d-flex gap-2">
            <input 
              type="text" 
              className="form-control"
              placeholder="Please input a Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className="btn btn-danger text-nowrap fw-semibold">
              Add Todo
            </button>
          </form>
        </div>

        {/* Khung hiển thị danh sách */}
        <div className="col-md-6">
          <div className="bg-white text-dark p-3 rounded-3 shadow-sm">
            <h6 className="fw-bold text-center mb-3">Todo List</h6>
            {todos.length === 0 ? (
              <p className="text-muted text-center mb-0">Chưa có công việc nào!</p>
            ) : (
              <ul className="list-unstyled mb-0">
                {todos.map((item, index) => (
                  <li key={index} className="d-flex justify-content-between align-items-center mb-2 pb-1 border-bottom">
                    <span className="fw-medium">{item}</span>
                    <button 
                      className="btn btn-danger btn-sm px-2 py-0"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;