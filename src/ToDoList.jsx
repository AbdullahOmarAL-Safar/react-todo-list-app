import React, { useState } from 'react';
import './index.css'; 

function ToDoList() {
  const [tasks, setTasks] = useState([
    'Eat Breakfast',
    'Take a Shower',
    'Walk the Dogs',
    'Learn Something',
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks(prev => [...prev, newTask.trim()]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>📝 To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          className="input"
        />
        <button className="add-button" onClick={addTask}>
          ➕ Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="text">{task}</span>
            <div className="controls">
              <button className="delete-button" onClick={() => deleteTask(index)}>
                🗑️ Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ⬆️ Up
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                ⬇️ Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}


export default ToDoList;
