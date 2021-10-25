import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  RESET_TODOS,
  LOAD_TODOS,
  IS_COMPLITED,
  SIGN_IN_USER_TOKEN,
} from '../types';

const initialState = {
  settings: {
    isLoading: false,
    isSignout: false,
    userToken: null,
    isComplited: false,
  },
  data: [],
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.id,
            userId: action.userId,
            title: action.title,
            completed: action.completed,
          },
        ],
      };
    case EDIT_TODO:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.id ? {...item, title: action.title} : item,
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.id),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.id ? {...item, completed: !item.completed} : item,
        ),
      };

    case RESET_TODOS:
      return (state = initialState);

    case LOAD_TODOS:
      return {...state, data: [...action.payload]};

    case IS_COMPLITED:
      return {
        ...state,
        settings: {...state.settings, isComplited: !action.payload},
      };

    case SIGN_IN_USER_TOKEN:
      return {
        ...state,
        settings: {...state.settings, userToken: action.payload},
      };

    default:
      return state;
  }
}
