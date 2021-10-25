import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  RESET_TODOS,
  LOAD_TODOS,
  ERROR_TODOS,
  IS_COMPLITED,
  SIGN_IN_USER_TOKEN,
} from '../types';
import axios from 'react-native-axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/?userId=1';
///const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
//const headerKey = [];

const axiosRequst = axios.create({
  timeout: 3000,
  // headers: headerKey,
});

export const addTodo = (id, userId, title, completed) => ({
  type: ADD_TODO,
  id,
  userId,
  title,
  completed,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  id,
  title,
});
export const resetTodos = () => ({
  type: RESET_TODOS,
});

export function loadTodosAsync() {
  return function (dispatch) {
    return axiosLoadTodos(dispatch);
  };
}

function axiosLoadTodos(dispatch) {
  return axiosRequst
    .get(apiUrl)
    .then(res => {
      // console.log('res : ', res.data);
      dispatch(loadTodos(res.data));
    })
    .catch(error => {
      dispatch(errorTodos(error));
      // console.log('Catch error : ' + error); // Ошибка с сервера
    });
}
export const loadTodos = todos => ({
  type: LOAD_TODOS,
  payload: todos,
});

export const errorTodos = error => ({
  type: ERROR_TODOS,
  payload: error,
});

export function reloadTodos(i) {
  return dispatch => {
    dispatch(resetTodos(i));
    setTimeout(() => {
      dispatch(loadTodosAsync());
    }, 1000);
  };
}

export const isComplited = value => ({
  type: IS_COMPLITED,
  payload: value,
});

export const userToken = value => ({
  type: SIGN_IN_USER_TOKEN,
  payload: value,
});
