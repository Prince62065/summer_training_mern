import React, { useState } from 'react';
import './Add_Task.css';

const Add_Task = () => {
  const [counter, setCounter] = useState(0);
  const warning = "Counter can't be less than 0";

  const handleAdd = () => {
    setCounter(prev => prev + 1);
    console.log(counter + 1); 
  };

  const handleRemove = () => {
    if (counter <= 0) {
      alert(warning);
    } else {
      setCounter(prev => prev - 1);
      console.log(counter - 1);
    }
  };

  return (
    <div className="add_task">
      <h1>Welcome User</h1>
      <button onClick={handleAdd}>Add Task</button>
      <button onClick={handleRemove}>Remove Task</button>
      <p>Number of tasks in the machine : {counter}</p>
    </div>
  );
};

export default Add_Task;
