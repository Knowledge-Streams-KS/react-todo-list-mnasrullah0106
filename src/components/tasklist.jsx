import React, { useState } from 'react';
import './counter.css';

const TaskListWithCheckbox = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Checked' },
    { id: 2, title: 'Task 2', description: 'Checked' },
    { id: 3, title: 'Task 3', description: 'Checked' }
  ]);
  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className='container'>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <h3 style={{ display: 'inline-block', marginLeft: '10px' }}>{task.title}</h3>
            {task.completed ? (
              <p style={{ marginLeft: '30px', color: 'green'   }}>{task.description}</p>
            ) : (
              <p style={{ marginLeft: '30px', color: 'black' }}>Unchecked</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskListWithCheckbox;