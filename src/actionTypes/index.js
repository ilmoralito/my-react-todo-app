import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  UPDATE_TODO,
  CHANGE_FILTER,
  SEARCH_TODO
} from "../actions";

export const addTodo = task => ({ type: ADD_TODO, task });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const editTodo = id => ({ type: EDIT_TODO, id });
export const cancelEditTodo = id => ({ type: CANCEL_EDIT_TODO, id });
export const updateTodo = (id, task) => ({ type: UPDATE_TODO, id, task });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
export const searchTodo = searchTerm => ({ type: SEARCH_TODO, searchTerm });
