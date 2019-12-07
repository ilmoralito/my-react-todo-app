import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  UPDATE_TODO,
  CHANGE_FILTER
} from "../actions";
import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return applyAddTodo(state, action);
    case TOGGLE_TODO:
      return applyToggleTodo(state, action);
    case DELETE_TODO:
      return applyDeleteTodo(state, action);
    case EDIT_TODO:
      return applyEditTodo(state, action);
    case CANCEL_EDIT_TODO:
      return applyCancelEditTodo(state, action);
    case UPDATE_TODO:
      return applyUpdateTodo(state, action);
    case CHANGE_FILTER:
      return applyChangeFilter(state, action);
    default:
      return state;
  }
};

const applyAddTodo = (state, action) => ({
  ...state,
  todos: [
    ...state.todos,
    { id: uuid(), task: action.task, done: false, isEditing: false }
  ]
});

const applyToggleTodo = (state, action) => ({
  ...state,
  todos: state.todos.map(todo =>
    todo.id === action.id ? { ...todo, done: !todo.done } : { ...todo }
  )
});

const applyDeleteTodo = (state, action) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== action.id)
});

const applyEditTodo = (state, action) => ({
  ...state,
  todos: state.todos.map(todo =>
    todo.id === action.id ? { ...todo, isEditing: true } : { ...todo }
  )
});

const applyCancelEditTodo = (state, action) => ({
  ...state,
  todos: state.todos.map(todo =>
    todo.id === action.id ? { ...todo, isEditing: false } : { ...todo }
  )
});

const applyUpdateTodo = (state, action) => ({
  ...state,
  todos: state.todos.map(todo =>
    todo.id === action.id
      ? { ...todo, task: action.task, isEditing: false }
      : { ...todo }
  )
});

const applyChangeFilter = (state, action) => ({
  ...state,
  filter: action.filter
});

export default reducer;
