import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskItems = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));

  return <div className="task-list mt-4">{taskItems}</div>;
}

export default TaskList;
