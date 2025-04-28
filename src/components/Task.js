import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleDeleteClick() {
    onDeleteTask(text);
  }

  return (
    <div className="card mb-3 p-3 task">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{text}</h5>
          <p className="card-text">
            <small className="text-muted">{category}</small>
          </p>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
