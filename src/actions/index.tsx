import {
  LOADING_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR
} from "../constant";

export function fetchTodos() {
  return dispatch => {
    dispatch({ type: LOADING_TODOS });
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => {
        dispatch({
          type: LOAD_TODOS_SUCCESS,
          todos
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_TODOS_ERROR,
          error
        });
      });
  };
}
