// NewTaskForm.jsx

import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && category) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory(categories[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskDetails">Details</label>
      <input
        id="taskDetails"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="taskCategory">Category</label>
      <select
        id="taskCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
