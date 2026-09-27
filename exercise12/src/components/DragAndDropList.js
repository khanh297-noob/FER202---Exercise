import React, { useState } from 'react';

const DragAndDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Cần thiết để cho phép drop
  };

  const handleDrop = (dropIndex) => {
    if (draggingIndex === null || draggingIndex === dropIndex) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggingIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    setItems(updatedItems);
    setDraggingIndex(null);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">7. Drag and Drop List</h5>
      <p className="text-muted small">Kéo thả chuột các mục để đổi vị trí</p>
      <ul className="list-unstyled d-flex flex-column align-items-center gap-2 mb-0">
        {items.map((item, index) => (
          <li 
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            className={`p-2 rounded-2 border fw-bold fs-5 user-select-none ${
              draggingIndex === index ? 'opacity-50 border-warning' : 'bg-secondary text-white border-dark'
            }`}
            style={{ width: '220px', cursor: 'grab' }}
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;