import React, { useState } from "react";
import { FILTERS } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.DONE:
      return todos.filter(todo => todo.done);
    case FILTERS.ACTIVE:
      return todos.filter(todo => !todo.done);
    case FILTERS.ALL:
    default:
      return todos;
  }
};

const List = ({
  todos,
  filter,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onCancelEditTodo,
  onUpdateTodo
}) => {
  const todoList = getVisibleTodos(todos, filter);

  return (
    <table>
      <tbody>
        {todoList.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onCancelEditTodo={onCancelEditTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

const Todo = ({
  id,
  task,
  done,
  isEditing,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onCancelEditTodo,
  onUpdateTodo
}) => {
  const [newTask, setNewTask] = useState(task);

  return (
    <tr>
      <td style={{ textDecoration: done ? "line-through" : "none" }}>
        {isEditing ? (
          <input
            value={newTask}
            onChange={event => setNewTask(event.target.value)}
          />
        ) : (
          newTask
        )}
      </td>
      <td>
        {!isEditing && (
          <input
            type="checkbox"
            checked={done}
            onChange={() => onToggleTodo(id)}
          />
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={() => onUpdateTodo(id, task)}>Confirm</button>
        ) : (
          !done && <button onClick={() => onEditTodo(id)}>Edit</button>
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={() => onCancelEditTodo(id)}>Cancel</button>
        ) : (
          !done && <button onClick={() => onDeleteTodo(id)}>Delete</button>
        )}
      </td>
    </tr>
  );
};

export default List;
