import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  editTodo,
  removeTodo,
  toggleTodo,
  resetTodos,
  loadTodosAsync,
  reloadTodos,
  addTodo,
  isComplited,
  userToken,
} from '../state/actions';

function useActions() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todos.data);
  const settings = useSelector(state => state.todos.settings);

  const handlerToggleTodo = useCallback(
    id => {
      dispatch(toggleTodo(id));
    },
    [dispatch],
  );
  const handlerEditTodo = useCallback(
    (id, title) => {
      dispatch(editTodo(id, title));
    },
    [dispatch],
  );
  const handlerRemoveTodos = useCallback(
    id => {
      dispatch(removeTodo(id));
    },
    [dispatch],
  );

  const handlerAddTodo = useCallback(
    (id, userId, title, completed) => {
      dispatch(addTodo(id, userId, title, completed));
    },
    [dispatch],
  );

  const handlerLoadTodosAsync = useCallback(() => {
    dispatch(loadTodosAsync());
  }, [dispatch]);

  const handlerResetTodos = useCallback(() => {
    dispatch(resetTodos());
  }, [dispatch]);

  const handlerReLoadTodos = useCallback(() => {
    dispatch(reloadTodos());
  }, [dispatch]);

  const handlerToggleCoplited = useCallback(
    value => {
      dispatch(isComplited(value));
    },
    [dispatch],
  );

  const handlerUserToken = useCallback(
    value => {
      dispatch(userToken(value));
    },
    [dispatch],
  );
  return {
    data,
    settings,
    handlerLoadTodosAsync,
    handlerResetTodos,
    handlerRemoveTodos,
    handlerToggleTodo,
    handlerEditTodo,
    handlerAddTodo,
    handlerReLoadTodos,
    handlerToggleCoplited,
    handlerUserToken,
  };
}

export {useActions};
