import { useState } from "react";
import Task from "../task"
function TaskList() {
  const [fieldValue, setFieldValue] = useState("");
  const [list, setList] = useState([]);
  
  const handleChange = (e) => {
    setFieldValue(e.target.value);
  };
  const addTask = () => {
    if (fieldValue !== "") {
      setList((prevlist)=>[...prevlist, fieldValue]);
      setFieldValue("");
    }
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={fieldValue} />
      <button onClick={addTask}>Add Task</button>
      <p>
        {list.map((value, index) => (
          <Task key={index} task={value} />
        ))}
      </p>
    </>
  );
}

export default TaskList;
