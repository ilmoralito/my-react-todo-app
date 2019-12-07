import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [task, setTask] = useState("");

  const onSubmitForm = event => {
    event.preventDefault();

    if (!task.trim()) return;

    onSubmit(task);

    setTask("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="task">Task</label>
      <input value={task} onChange={event => setTask(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
