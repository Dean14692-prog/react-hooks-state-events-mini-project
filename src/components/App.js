import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="App container p-4">
      <h2 className="text-center mb-4">My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={(newTask) => setTasks([...tasks, newTask])}
      />

      <TaskList
        tasks={tasks.filter(
          (task) =>
            selectedCategory === "All" || task.category === selectedCategory
        )}
        onDeleteTask={(taskText) =>
          setTasks(tasks.filter((task) => task.text !== taskText))
        }
      />
    </div>
  );
}

export default App;
