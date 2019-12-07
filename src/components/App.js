import React, { useReducer } from "react";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  cancelEditTodo,
  updateTodo,
  changeFilter,
  searchTodo
} from "../actionTypes";
import reducer from "../reducers";

import Form from "./Form";
import List from "./List";
import Filter from "./Filter";
import Search from "./Search";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    filter: "ALL",
    searchTerm: ""
  });

  const submitHandler = task => dispatch(addTodo(task));

  const toggleTodoHandler = id => dispatch(toggleTodo(id));

  const deleteTodoHandler = id => dispatch(deleteTodo(id));

  const editTodoHandler = id => dispatch(editTodo(id));

  const cancelEditTodoHandler = id => dispatch(cancelEditTodo(id));

  const updateTodoHandler = (id, task) => dispatch(updateTodo(id, task));

  const changeFilterHandler = filter => dispatch(changeFilter(filter));

  const searchHandler = searchTerm => dispatch(searchTodo(searchTerm));

  return (
    <div>
      <Form onSubmit={submitHandler} />
      {state.todos.length > 0 && (
        <Search onSearch={searchHandler}>Search</Search>
      )}
      <List
        todos={state.todos}
        filter={state.filter}
        searchTerm={state.searchTerm}
        onToggleTodo={toggleTodoHandler}
        onDeleteTodo={deleteTodoHandler}
        onEditTodo={editTodoHandler}
        onCancelEditTodo={cancelEditTodoHandler}
        onUpdateTodo={updateTodoHandler}
      />
      {state.todos.length > 0 && (
        <Filter filter={state.filter} onChangeFilter={changeFilterHandler} />
      )}
    </div>
  );
};

export default App;
