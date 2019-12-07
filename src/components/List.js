import React, { useState } from "react";
import { FILTERS } from "../actions";

const itsDone = todo => todo.done;

const itsNotDone = todo => !todo.done;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.DONE:
      return todos.filter(itsDone);
    case FILTERS.ACTIVE:
      return todos.filter(itsNotDone);
    case FILTERS.ALL:
    default:
      return todos;
  }
};

const search = searchTerm => todo =>
  todo.task.toLowerCase().includes(searchTerm.toLowerCase());

const List = ({
  todos,
  filter,
  searchTerm,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onCancelEditTodo,
  onUpdateTodo
}) => {
  let todoList = getVisibleTodos(todos, filter);

  todoList = todoList.filter(search(searchTerm));

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
