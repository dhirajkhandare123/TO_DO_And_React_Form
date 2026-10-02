import React, { useState } from 'react'


const ToDoList = () => {
    const [task, setTask] = useState("");
            const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

            if(tasks.includes(task.trim())){
                alert("Task already present");
            return;
    }

            setTasks([...tasks, task]);
            setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
  };
    return (
            

            <div>
                <h1>To-Do List</h1>

                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>
                    Add Task
                </button>

                <ul>
                    {tasks.map((item, index) => (
                        <li key={index}>
                            {item}

                            <button onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            );
    

}

export default ToDoList