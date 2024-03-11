

const task = () => {
    const [tasks, setTasks] = useState(false)
   
    return (
        <div>
          <h2>Task List</h2>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                {/* Checkbox input */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                {/* Task title */}
                <h3 style={{ display: 'inline-block', marginLeft: '10px' }}>{task.title}</h3>
                {/* Task description */}
                <p style={{ marginLeft: '30px', color: task.completed ? 'gray' : 'black' }}>{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
};
export default task;